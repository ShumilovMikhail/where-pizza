import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../../../environments/environment.development";
import { GetProductsResponse } from "../types/getProductsResponse.interface";
import { GetFiltersResponse } from "../types/getFiltersResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productsUrl: string = `https://${environment.projectID}.firebaseio.com/products.json`;
  private readonly filtersUrl: string = `https://${environment.projectID}.firebaseio.com/filters.json`;

  constructor(private http: HttpClient) { };

  public getProducts(): Observable<GetProductsResponse> {
    return this.http.get<GetProductsResponse>(this.productsUrl);
  };

  public getFilters(): Observable<GetFiltersResponse> {
    return this.http.get<GetFiltersResponse>(this.filtersUrl);
  };
};
