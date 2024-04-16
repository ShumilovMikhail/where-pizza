import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../environments/environment.development";
import { DataStorageService } from "../../services/data-storage.service";
import { DataStorageTypes } from "../../types/dataStorageTypes";
import { UserData } from "../../types/userData.interface";
import { SendVerificationEmailResponse } from "../types/sendVerificationEmailResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class VerificationEmailService {

  private sendVerificationEmailUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=' + environment.API;

  constructor(private http: HttpClient, private dataStorageService: DataStorageService) { };

  public sendVerificationEmail(): Observable<SendVerificationEmailResponse> {
    const idToken = (this.dataStorageService.getItem(DataStorageTypes.USER_DATA) as UserData).idToken;
    return this.http.post<SendVerificationEmailResponse>(this.sendVerificationEmailUrl, {
      idToken,
      requestType: "VERIFY_EMAIL"
    }, {
      headers: {
        'X-Firebase-Locale': 'ru_RU'
      }
    });
  };
};
