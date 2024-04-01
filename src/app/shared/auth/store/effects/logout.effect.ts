import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { logoutAction } from "../actions/sync.action";

@Injectable()
export class LogoutEffect {

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logoutAction),
    tap(() => {
      this.authService.logout();
    })
  ), {
    dispatch: false
  })

  constructor(private actions$: Actions, private authService: AuthService) { };
};
