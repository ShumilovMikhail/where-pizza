import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { getUserDataAction, getUserDataFailureAction, getUserDataSuccessAction } from "../actions/get-user-data.action";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { UserData } from "../../../types/userData.interface";
import { UserDetails } from "../../../types/userDetails.interface";

@Injectable()
export class GetUserDataEffect {

  getUserData$ = createEffect(() => this.actions$.pipe(
    ofType(getUserDataAction),
    switchMap(() => {
      return this.authService.getUserData().pipe(
        map((userDetails: UserDetails) => {
          return getUserDataSuccessAction({ userDetails })
        }),
        catchError(() => {
          return of(getUserDataFailureAction())
        })
      )
    })
  ));

  getUserDataAfter$ = createEffect(() => this.actions$.pipe(
    ofType(getUserDataSuccessAction),
    tap(({ userDetails }) => {
      const userData: UserData = this.dataStorageService.getItem(DataStorageTypes.USER_DATA) as UserData;
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, { ...userData, ...userDetails })
    })
  ), {
    dispatch: false
  })

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
