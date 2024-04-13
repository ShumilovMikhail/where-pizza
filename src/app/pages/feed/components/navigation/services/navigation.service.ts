import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "../../../../../../environments/environment.development";
import { GetCategoriesResponse } from "../types/getCategoriesResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private readonly categoriesUrl = `https://${environment.projectID}.firebaseio.com/categories.json`;

  constructor(private readonly http: HttpClient) { };

  public getCategories(): Observable<GetCategoriesResponse> {
    return this.http.get<GetCategoriesResponse>(this.categoriesUrl);
  };
};
