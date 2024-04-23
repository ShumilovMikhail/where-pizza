import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { addOrderToHistoryAction, addOrderToHistoryFailureAction, addOrderToHistorySuccessAction } from "../actions/addOrderToHistory.action";
import { ProfileHistoryFetchService } from "../../services/profile-history-fetch.service";
import { ProfileHistoryOrder } from "../../types/profileHistoryOrder.interface";

@Injectable()
export class AddOrderToHistoryEffect {

  addOrderToHistory$ = createEffect(() => this.actions$.pipe(
    ofType(addOrderToHistoryAction),
    switchMap(({ order }) => {
      return this.profileHistoryFetchService.addOrderToHistory(order).pipe(
        map((order: ProfileHistoryOrder) => {
          return addOrderToHistorySuccessAction({ order })
        }),
        catchError(() => {
          return of(addOrderToHistoryFailureAction())
        })
      );
    }),
  ))

  constructor(private readonly actions$: Actions, private readonly profileHistoryFetchService: ProfileHistoryFetchService) { };
};
