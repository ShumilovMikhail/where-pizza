import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { UserInfo } from "../../../types/userInfo.interface";
import { getUserInfoAction, getUserInfoFailureAction, getUserInfoSuccessAction } from "../actions/get-user-info.action";

@Injectable()
export class GetUserInfoEffect {

  getUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(getUserInfoAction),
    switchMap(() => {
      return this.authService.getUserInfo().pipe(
        map((userInfo: UserInfo) => {
          return getUserInfoSuccessAction({ userInfo });
        }),
        catchError((error) => {
          return of(getUserInfoFailureAction({ error }));
        })
      );
    })
  ));

  getUserInfoAfter$ = createEffect(() => this.actions$.pipe(
    ofType(getUserInfoSuccessAction),
    tap(({ userInfo }) => {
      this.dataStorageService.setItem(DataStorageTypes.USER_INFO, userInfo);
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
