import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { ProfileHistoryOrder } from "../types/profileHistoryOrder.interface";
import { environment } from "../../../../../../environments/environment.development";

@Injectable({ providedIn: 'root' })
export class ProfileHistoryService {
  private orders: ProfileHistoryOrder[] = [];
  private pagesCount: number = 1;
  limit: number = environment.ProfileHistoryLimit;


  public setOrders(orders: ProfileHistoryOrder[]): void {
    this.orders = orders;
    this.calculatePages();
  };

  public getPagesCount(): number {
    return this.pagesCount;
  };

  public getOrdersOnPage(page: number): Observable<ProfileHistoryOrder[]> {
    const startIndex = this.limit * (page - 1);
    const endIndex = this.limit * page;
    return of(this.orders.slice(startIndex, endIndex));
  };

  private calculatePages() {
    this.pagesCount = this.orders.length === 0 ? 1 : Math.ceil(this.orders.length / this.limit);
  };
}
