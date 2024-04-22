import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { sendOrderAction, sendOrderFailureAction, sendOrderSuccessAction } from "../actions/sendOrder.action";
import { OrderService } from "../../services/order.service";
import { SendOrderResponse } from "../../types/sendOrderResponse.interface";

@Injectable()
export class SendOrderEffect {

  sendOrder$ = createEffect(() => this.actions$.pipe(
    ofType(sendOrderAction),
    switchMap(({ order }) => {
      return this.orderService.sendOrder(order).pipe(
        map((orderNumber: SendOrderResponse) => {
          return sendOrderSuccessAction(orderNumber);
        }),
        catchError(() => {
          return of(sendOrderFailureAction());
        })
      );
    })
  ));

  sendOrderAfter$ = createEffect(() => this.actions$.pipe(
    ofType(sendOrderSuccessAction),
    tap((response: SendOrderResponse) => this.router.navigate([`/order-accepted/${response.orderNumber}`],))
  ), { dispatch: false });

  constructor(private readonly actions$: Actions, private readonly orderService: OrderService, private readonly router: Router) { };
};
