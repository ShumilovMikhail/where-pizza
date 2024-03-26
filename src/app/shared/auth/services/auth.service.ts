import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

import { environment } from "../../../../environments/environment.development";
import { AuthRequest } from "../types/authRequest.interface";
import { AuthResponse } from "../types/authResponse.interface";
import { DataStorageService } from "../../services/dataStorage.service";
import { DataStorageTypes } from "../../types/dataStorageTypes";
import { UserData } from "../../types/userData.interface";
import { UserInfo } from "../../types/userInfo.interface";
import { BackendError } from "../../types/backedError.interface";
import { UserInfoErrorsTypes } from "../types/userInfoErrorsTypes";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.API;
  private loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.API

  constructor(private http: HttpClient, private dataStorageService: DataStorageService) { };

  public register(user: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.registerUrl, user);
  };

  public setUserInfo(userInfo: UserInfo): Observable<UserInfo> {
    const localId = (<UserData>this.dataStorageService.getItem(DataStorageTypes.USER_DATA)).localId;
    const fullUrl = `https://${environment.projectID}.firebaseio.com/userInfo/${localId}.json`;
    return this.http.put<UserInfo>(fullUrl, userInfo);
  };

  public getUserInfo(): Observable<UserInfo> {
    const localId = (<UserData>this.dataStorageService.getItem(DataStorageTypes.USER_DATA)).localId;
    const fullUrl = `https://${environment.projectID}.firebaseio.com/userInfo/${localId}.json`;
    return this.http.get<UserInfo>(fullUrl).pipe(
      map((userInfo) => {
        const error: BackendError<UserInfoErrorsTypes> = {
          code: 400,
          message: 'USER_INFO_IS_UNDEFINED' as UserInfoErrorsTypes,
          errors: [
            {
              message: 'USER_INFO_IS_UNDEFINED' as UserInfoErrorsTypes,
              domain: 'global',
              reason: 'invalid'
            }
          ]
        };
        if (!userInfo) {
          throw error
        }
        return userInfo
      }),
    );
  };

  public login(user: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.loginUrl, user);
  }

};
