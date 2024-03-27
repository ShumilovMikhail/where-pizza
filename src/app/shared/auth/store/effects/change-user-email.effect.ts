import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { changeUserEmailAction, changeUserEmailFailureAction, changeUserEmailSuccessAction } from "../actions/change-user-email.action";
import { UserData } from "../../../types/userData.interface";

@Injectable()
export class ChangeUserEmailEffect {

  changeUserEmail$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserEmailAction),
    switchMap(({ email }) => {
      return this.authService.changeUserEmail(email).pipe(
        map((userData: UserData) => {
          return changeUserEmailSuccessAction({ userData });
        }),
        catchError(() => {
          return of(changeUserEmailFailureAction());
        })
      );
    })
  ));

  setUserInfoAfter$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserEmailSuccessAction),
    tap(({ userData }) => {
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, userData);
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
