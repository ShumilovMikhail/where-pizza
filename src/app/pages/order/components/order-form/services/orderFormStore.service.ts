import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { Observable, switchMap, take, tap } from "rxjs";

import { OrderForm } from "../types/orderForm.interface";
import { OrderFormAdapterService } from "./orderFormAdapter.service";
import { Order } from "../../../types/order.interface";
import { Store } from "@ngrx/store";
import { sendOrderAction } from "../../../store/actions/sendOrder.action";


@Injectable({ providedIn: 'root' })
export class OrderFormService {

  constructor(private readonly orderFormAdapterService: OrderFormAdapterService, private store: Store) { };

  // readonly sendOrderForm = this.effect((orderForm$: Observable<OrderForm>) => {
  //   return orderForm$.pipe(
  //     switchMap((orderForm: OrderForm) => {
  //       return this.orderFormAdapterService.toOrder(orderForm).pipe(take(1))
  //     }),
  //     tap((order: Order) => {
  //     })
  //   );
  // });

  public sendOrderForm(orderForm: OrderForm): void {
    this.orderFormAdapterService.toOrder(orderForm).pipe(take(1)).subscribe((order: Order) => {
      console.log(1)
      this.store.dispatch(sendOrderAction({ order }))

    });
  };
};
