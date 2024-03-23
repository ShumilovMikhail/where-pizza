import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { AuthResponse } from "../../types/authResponse.interface";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { Store } from "@ngrx/store";
import { setUserInfoAction } from "../actions/set-user-info.action";
import { UserInfo } from "../../../types/userInfo.interface";

@Injectable()
export class RegisterEffect {

  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ user }) => {
      return this.authService.register(user).pipe(
        map((userData: AuthResponse) => {
          return registerSuccessAction({ userData });
        }),
        catchError((response: HttpErrorResponse) => {
          return of(registerFailureAction({ error: response.error.error }));
        })
      );
    })
  ));

  registerAfter$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(({ userData }) => {
      const userInfo: UserInfo = {
        username: '',
        phone: '',
        date: ''
      };
      this.store.dispatch(setUserInfoAction({ userInfo }));
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, userData);
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService, private store: Store) { };
};
