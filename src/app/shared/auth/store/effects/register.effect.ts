import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { AuthResponse } from "../../types/authResponse.interface";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";

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
      this.dataStorageService.setItem(DataStorageTypes.USER_DATA, userData);
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
