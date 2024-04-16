import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { UserInfo } from "../../../types/userInfo.interface";
import { changeUserInfoAction, changeUserInfoFailureAction, changeUserInfoSuccessAction } from "../actions/change-user-info.action";

@Injectable()
export class ChangeUserInfoEffect {

  changeUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserInfoAction),
    switchMap(({ userInfo }) => {
      return this.authService.changeUserInfo(userInfo).pipe(
        map((userInfo: UserInfo) => {
          return changeUserInfoSuccessAction({ userInfo });
        }),
        catchError(() => {
          return of(changeUserInfoFailureAction());
        })
      );
    })
  ));

  setUserInfoAfter$ = createEffect(() => this.actions$.pipe(
    ofType(changeUserInfoSuccessAction),
    tap(({ userInfo }) => {
      this.dataStorageService.setItem(DataStorageTypes.USER_INFO, userInfo);
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
