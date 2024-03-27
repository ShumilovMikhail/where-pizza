import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { changeUserPasswordAction, changeUserPasswordFailureAction, changeUserPasswordSuccessAction } from "../actions/change-user-password.action";

@Injectable()
export class ChangeUserPasswordEffect {

  changeUserPassword$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserPasswordAction),
    switchMap(({ password }) => {
      return this.authService.changeUserPassword(password).pipe(
        map(() => {
          return changeUserPasswordSuccessAction();
        }),
        catchError(() => {
          return of(changeUserPasswordFailureAction());
        })
      );
    })
  ));


  constructor(private actions$: Actions, private authService: AuthService) { };
};
