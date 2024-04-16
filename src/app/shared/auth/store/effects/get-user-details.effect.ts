import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { UserData } from "../../../types/userData.interface";
import { UserDetails } from "../../../types/userDetails.interface";
import { getUserDetailsAction, getUserDetailsFailureAction, getUserDetailsSuccessAction } from "../actions/get-user-details.action";

@Injectable()
export class GetUserDetailsEffect {

  getUserDetails$ = createEffect(() => this.actions$.pipe(
    ofType(getUserDetailsAction),
    switchMap(() => {
      return this.authService.getUserDetails().pipe(
        map((userDetails: UserDetails) => {
          return getUserDetailsSuccessAction({ userDetails })
        }),
        catchError(() => {
          return of(getUserDetailsFailureAction())
        })
      )
    })
  ));

  getUserDetailsAfter$ = createEffect(() => this.actions$.pipe(
    ofType(getUserDetailsSuccessAction),
    tap(({ userDetails }) => {
      const userData: UserData = this.dataStorageService.getItem(DataStorageTypes.USER_DATA) as UserData;
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, { ...userData, ...userDetails })
    })
  ), {
    dispatch: false
  })

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
