import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { sendOrderAction, sendOrderFailureAction, sendOrderSuccessAction } from "../actions/sendOrder.action";
import { OrderService } from "../../services/order.service";
import { SendOrderResponse } from "../../types/sendOrderReponse.interface";

@Injectable()
export class SendOrderEffect {

  sendOrder$ = createEffect(() => this.actions$.pipe(
    ofType(sendOrderAction),
    switchMap(({ order }) => {
      return this.orderService.sendOrder(order).pipe(
        map((response: SendOrderResponse) => {
          return sendOrderSuccessAction({ response });
        }),
        catchError(() => {
          return of(sendOrderFailureAction());
        })
      );
    })
  ));

  constructor(private readonly actions$: Actions, private readonly orderService: OrderService) { };
};
