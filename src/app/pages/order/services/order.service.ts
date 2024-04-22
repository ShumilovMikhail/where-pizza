import { Injectable } from "@angular/core";
import { Order } from "../types/order.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment.development";
import { Observable, map, switchMap, take } from "rxjs";
import { GetCountResponse } from "../types/getCountResponse.interface";
import { SendOrderResponse } from "../types/sendOrderResponse.interface";
import { OrderNumber } from "../types/orderNumber.interface";

@Injectable({ providedIn: 'root' })
export class OrderService {

  constructor(private readonly http: HttpClient) { };

  public sendOrder(order: Order): Observable<OrderNumber> {
    return this.getCount().pipe(
      switchMap((count: number) => {
        const fullUrl = `https://${environment.projectID}.firebaseio.com/order/${count + 1}.json`;
        this.updateCount(count);
        return this.http.put<SendOrderResponse>(fullUrl, order).pipe(map(() => ({ orderNumber: count + 1 })));
      })
    );
  };

  private getCount(): Observable<number> {
    const fullUrl = `https://${environment.projectID}.firebaseio.com/order.json`;
    return this.http.get<GetCountResponse>(fullUrl).pipe(map((getCountResponse: GetCountResponse) => getCountResponse.count));
  };

  private updateCount(oldCount: number): void {
    const fullUrl = `https://${environment.projectID}.firebaseio.com/order.json`;
    this.http.patch<GetCountResponse>(fullUrl, { count: oldCount + 1 }).pipe(take(1)).subscribe(() => console.log('update count'));
  };
};
