import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { UserInfo } from "../../../types/userInfo.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/get-current-user.action";
import { UserData } from "../../../types/userData.interface";

@Injectable()
export class GetCurrentUserEffect {

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const userData: UserData = this.dataStorageService.getItem(DataStorageTypes.USER_DATA) as UserData;
      const userInfo: UserInfo = this.dataStorageService.getItem(DataStorageTypes.USER_INFO) as UserInfo;
      if (userData && userInfo) {
        return of(getCurrentUserSuccessAction({ userData, userInfo }));
      };
      return of(getCurrentUserFailureAction());
    })
  ));

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService) { };
};
