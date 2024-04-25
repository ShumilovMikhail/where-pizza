import { Injectable, inject } from "@angular/core";

import { ProfileHistoryOrder } from "../../../types/profileHistoryOrder.interface";
import { environment } from "../../../../../../../../environments/environment.development";
import { Store } from "@ngrx/store";
import { setProductsAction } from "../../../../../../../shared/cart/store/actions/sync.action";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class ProfileHistoryFeedService {

  private orders: ProfileHistoryOrder[] = [];
  private readonly limit: number = environment.ProfileHistoryLimit;
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  public setOrders(orders: ProfileHistoryOrder[]): void {
    this.orders = [...orders].sort((a, b) => b.orderNumber - a.orderNumber);
  };

  public getOrdersOnPage(page: number): ProfileHistoryOrder[] {
    return this.orders.slice(this.limit * (page - 1), this.limit * page)
  };

  public repeatOrder(order: ProfileHistoryOrder): void {
    this.store.dispatch(setProductsAction({ cartProducts: order.products }));
    this.router.navigate(['order']);
  };
};
