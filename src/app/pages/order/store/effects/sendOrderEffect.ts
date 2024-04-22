import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { sendOrderAction, sendOrderFailureAction, sendOrderSuccessAction } from "../actions/sendOrder.action";
import { OrderService } from "../../services/order.service";
import { OrderNumber } from "../../types/orderNumber.interface";

@Injectable()
export class SendOrderEffect {

  sendOrder$ = createEffect(() => this.actions$.pipe(
    ofType(sendOrderAction),
    switchMap(({ order }) => {
      return this.orderService.sendOrder(order).pipe(
        map((orderNumber: OrderNumber) => {
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
    tap((orderNumber: OrderNumber) => this.router.navigate([`/order-accepted/${orderNumber.orderNumber}`],))
  ), { dispatch: false });

  constructor(private readonly actions$: Actions, private readonly orderService: OrderService, private readonly router: Router) { };
};
