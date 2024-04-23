import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { ProfileHistoryFetchService } from "../../services/profile-history-fetch.service";
import { ProfileHistoryOrder } from "../../types/profileHistoryOrder.interface";
import { getProfileHistoryOrdersAction, getProfileHistoryOrdersFailureAction, getProfileHistoryOrdersSuccessAction } from "../actions/getOrders.action";

@Injectable()
export class GetProfileHistoryOrdersEffect {

  getProfileHistoryOrders$ = createEffect(() => this.actions$.pipe(
    ofType(getProfileHistoryOrdersAction),
    switchMap(() => {
      return this.profileHistoryFetchService.getProfileHistoryOrders().pipe(
        map((orders: ProfileHistoryOrder[]) => {
          return getProfileHistoryOrdersSuccessAction({ orders })
        }),
        catchError(() => {
          return of(getProfileHistoryOrdersFailureAction())
        })
      );
    }),
  ))

  constructor(private readonly actions$: Actions, private readonly profileHistoryFetchService: ProfileHistoryFetchService) { };
};
