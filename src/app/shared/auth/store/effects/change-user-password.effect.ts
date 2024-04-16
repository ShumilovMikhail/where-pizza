import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { changeUserPasswordAction, changeUserPasswordFailureAction, changeUserPasswordSuccessAction } from "../actions/change-user-password.action";
import { UserData } from "../../../types/userData.interface";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";

@Injectable()
export class ChangeUserPasswordEffect {

  changeUserPassword$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserPasswordAction),
    switchMap(({ password }) => {

      return this.authService.changeUserPassword(password).pipe(
        map((response) => {
          const previousUserData: UserData = this.dataStorageService.getItem(DataStorageTypes.USER_DATA) as UserData
          const userData: UserData = {
            kind: response.kind,
            idToken: response.idToken,
            email: response.email,
            refreshToken: response.refreshToken,
            expiresIn: response.expiresIn,
            localId: response.localId,
            ...previousUserData,
          };
          return changeUserPasswordSuccessAction({ userData });
        }),
        catchError(() => {
          return of(changeUserPasswordFailureAction());
        })
      );
    })
  ));

  changeUserPasswordAfter$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserPasswordSuccessAction),
    tap(({ userData }) => {
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, userData);
    })
  ), {
    dispatch: false
  });


  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
