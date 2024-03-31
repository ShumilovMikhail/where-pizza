import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take, tap } from "rxjs";

import { AuthService } from "../../services/auth.service";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { setUserInfoAction, setUserInfoFailureAction, setUserInfoSuccessAction } from "../actions/set-user-info.action";
import { UserInfo } from "../../../types/userInfo.interface";
import { Store } from "@ngrx/store";
import { userDataSelector } from "../selectors";
import { UserData } from "../../../types/userData.interface";
import { getUserDetailsAction } from "../actions/get-user-details.action";

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
      this.store.dispatch(getUserDetailsAction())
      this.store.select(userDataSelector).pipe(
        take(1),
        tap((userData: UserData) => {
          this.dataStorageService.setItem(DataStorageTypes.USER_DATA, userData);
        })
      );
      this.router.navigateByUrl('/');
    })
  ), {
    dispatch: false
  });

  constructor(private actions$: Actions, private authService: AuthService, private dataStorageService: DataStorageService, private router: Router, private store: Store) { };
};
