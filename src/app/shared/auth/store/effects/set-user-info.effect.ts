import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { setUserInfoAction, setUserInfoFailureAction, setUserInfoSuccessAction } from "../actions/set-user-info.action";
import { UserInfo } from "../../../types/userInfo.interface";

@Injectable()
export class SetUserInfoEffect {

  setUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(setUserInfoAction),
    switchMap(({ userInfo }) => {
      return this.authService.setUserInfo(userInfo).pipe(
        map((userInfo: UserInfo) => {
          return setUserInfoSuccessAction({ userInfo });
        }),
        catchError(() => {
          return of(setUserInfoFailureAction());
        })
      );
    })
  ));

  setUserInfoAfter$ = createEffect(() => this.actions$.pipe(
    ofType(setUserInfoSuccessAction),
    tap(({ userInfo }) => {
      this.dataStorageService.setItem(DataStorageTypes.USER_INFO, userInfo);
      this.router.navigateByUrl('/');
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService, private router: Router) { };
};
