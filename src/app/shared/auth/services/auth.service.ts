import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment.development";
import { AuthRequest } from "../types/authRequest.interface";
import { AuthResponse } from "../types/authResponse.interface";
import { DataStorageService } from "../../services/dataStorage.service";
import { DataStorageTypes } from "../../types/dataStorageTypes";
import { UserData } from "../../types/userData.interface";
import { UserInfo } from "../../types/userInfo.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.API;

  constructor(private http: HttpClient, private dataStorageService: DataStorageService) { };

  public register(user: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.registerUrl, user);
  };

  public setUserInfo(userInfo: UserInfo): Observable<UserInfo> {
    const localId = (<UserData>this.dataStorageService.getItem(DataStorageTypes.USER_DATA)).localId;
    const fullUrl = `https://${environment.projectID}.firebaseio.com/userInfo/${localId}.json`;
    return this.http.put<UserInfo>(fullUrl, userInfo);
  };

};
