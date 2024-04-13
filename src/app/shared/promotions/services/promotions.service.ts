import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment.development";
import { GetPromotionsResponseType } from "../types/getPromotionsResponse.type";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class PromotionsService {

  private readonly promotionsUrl = `https://${environment.projectID}.firebaseio.com/promotions.json`;

  constructor(private readonly http: HttpClient) { };

  getPromotions(): Observable<GetPromotionsResponseType> {
    return this.http.get<GetPromotionsResponseType>(this.promotionsUrl);
  };
};
