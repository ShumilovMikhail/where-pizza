import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { AuthResponse } from "../../types/authResponse.interface";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { loginAction, loginFailureAction, loginSuccessAction } from "../actions/login.action";
import { getUserInfoAction } from "../actions/get-user-info.action";
import { getUserDetailsAction } from "../actions/get-user-details.action";

@Injectable()
export class LoginEffect {

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ user }) => {

      return this.authService.login(user).pipe(
        map((userData: AuthResponse) => {
          return loginSuccessAction({ userData });
        }),
        catchError((response: HttpErrorResponse) => {
          return of(loginFailureAction({ error: response.error.error }));
        })
      );
    })
  ));

  loginAfter$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(({ userData }) => {
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, userData);
      this.store.dispatch(getUserInfoAction());
      this.store.dispatch(getUserDetailsAction());
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService, private store: Store) { };
};
