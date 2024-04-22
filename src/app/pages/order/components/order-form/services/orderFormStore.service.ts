import { Injectable } from "@angular/core";
import { filter, take } from "rxjs";

import { OrderForm } from "../types/orderForm.interface";
import { OrderFormAdapterService } from "./orderFormAdapter.service";
import { Order } from "../../../types/order.interface";
import { Store } from "@ngrx/store";
import { sendOrderAction } from "../../../store/actions/sendOrder.action";
import { isSuccessSelector } from "../../../store/selectors";
import { resetCartAction } from "../../../../../shared/cart/store/actions/sync.action";


@Injectable({ providedIn: 'root' })
export class OrderFormService {

  constructor(private readonly orderFormAdapterService: OrderFormAdapterService, private store: Store) { };

  public sendOrderForm(orderForm: OrderForm): void {
    this.orderFormAdapterService.toOrder(orderForm).pipe(take(1)).subscribe((order: Order) => {
      this.store.dispatch(sendOrderAction({ order }));
      this.store.select(isSuccessSelector).pipe(filter(Boolean), take(1)).subscribe(() => {
        this.store.dispatch(resetCartAction());
      });
    });
  };
};
