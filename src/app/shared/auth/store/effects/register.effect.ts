import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "../actions/register.action";
import { AuthResponse } from "../../types/authResponse.interface";

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

  constructor(private actions$: Actions, private authService: AuthService) { };
};
