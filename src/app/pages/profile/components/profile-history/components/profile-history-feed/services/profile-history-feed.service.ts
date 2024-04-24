import { Injectable } from "@angular/core";

import { ProfileHistoryOrder } from "../../../types/profileHistoryOrder.interface";
import { environment } from "../../../../../../../../environments/environment.development";

@Injectable({ providedIn: 'root' })
export class ProfileHistoryFeedService {

  private orders: ProfileHistoryOrder[] = [];
  private readonly limit: number = environment.ProfileHistoryLimit;

  public setOrders(orders: ProfileHistoryOrder[]): void {
    this.orders = [...orders].sort((a, b) => b.orderNumber - a.orderNumber);
  };

  public getOrdersOnPage(page: number): ProfileHistoryOrder[] {
    return this.orders.slice(this.limit * (page - 1), this.limit * page)
  };
};
