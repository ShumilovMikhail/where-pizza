import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { UserInfo } from "../../../types/userInfo.interface";
import { UserData } from "../../../types/userData.interface";
import { autoLoginAction, autoLoginFailureAction, autoLoginSuccessAction } from "../actions/auto-login.action";

@Injectable()
export class AutoLoginEffect {

  autoLoginUser$ = createEffect(() => this.actions$.pipe(
    ofType(autoLoginAction),
    switchMap(() => {
      const userData: UserData = this.dataStorageService.getItem(DataStorageTypes.USER_DATA) as UserData;
      const userInfo: UserInfo = this.dataStorageService.getItem(DataStorageTypes.USER_INFO) as UserInfo;
      if (userData && userInfo) {
        return of(autoLoginSuccessAction({ userData, userInfo }));
      };
      return of(autoLoginFailureAction());
    })
  ));

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
