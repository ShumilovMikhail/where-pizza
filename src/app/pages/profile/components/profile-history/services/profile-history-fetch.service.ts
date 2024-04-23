import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { Observable, map, switchMap, take } from "rxjs";

import { ProfileHistoryOrder } from "../types/profileHistoryOrder.interface";
import { userDataSelector } from "../../../../../shared/auth/store/selectors";
import { UserData } from "../../../../../shared/types/userData.interface";
import { environment } from "../../../../../../environments/environment.development";
import { GetProfileHistoryResponse } from "../types/getProfileHistoryReponse.interface";

@Injectable({ providedIn: 'root' })
export class ProfileHistoryFetchService {

  constructor(private readonly store: Store, private readonly http: HttpClient) { }

  public addOrderToHistory(order: ProfileHistoryOrder): Observable<ProfileHistoryOrder | Error> {
    return this.store.select(userDataSelector).pipe(
      switchMap((userData: UserData | null) => {
        if (userData === null) {
          throw new Error('not authenticate');
        };
        return this.getCount(userData.localId).pipe(switchMap((count: number) => {
          const fullUrl = `https://${environment.projectID}.firebaseio.com/history/${userData.localId}/orders/${count}.json`;
          this.updateCount(count, userData.localId)
          return this.http.put<ProfileHistoryOrder>(fullUrl, order)
        }));
      })
    );
  };

  public getProfileHistoryOrders(): Observable<ProfileHistoryOrder[]> {
    return this.store.select(userDataSelector).pipe(
      switchMap((userData: UserData | null) => {
        if (userData === null) {
          throw new Error('not authenticate');
        };
        const fullUrl = `https://${environment.projectID}.firebaseio.com/history/${userData.localId}.json`;
        return this.http.get<GetProfileHistoryResponse>(fullUrl).pipe(map((response) => response.orders || []));
      })
    );
  };

  private updateCount(oldCount: number, localId: string): void {
    const fullUrl = `https://${environment.projectID}.firebaseio.com/history/${localId}.json`;
    this.http.patch<GetProfileHistoryResponse>(fullUrl, { count: oldCount + 1 }).pipe(take(1)).subscribe(() => console.log('update count'));
  };

  private getCount(localId: string): Observable<number> {
    const fullUrl = `https://${environment.projectID}.firebaseio.com/history/${localId}.json`;
    return this.http.get<GetProfileHistoryResponse>(fullUrl).pipe(map((response) => response ? response.count : 0));
  };
};
