import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment.development";
import { AuthRequest } from "../types/authRequest.interface";
import { AuthResponse } from "../types/authResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.API;

  constructor(private http: HttpClient) { };

  public register(user: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.registerUrl, user);
  };


};
