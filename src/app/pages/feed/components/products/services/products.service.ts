import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "../../../../../../environments/environment.development";
import { GetProductsResponse } from "../types/getProductsResponse.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private readonly productsUrl: string = `https://${environment.projectID}.firebaseio.com/products.json`;

  constructor(private http: HttpClient) { };

  getProducts(): Observable<GetProductsResponse> {
    return this.http.get<GetProductsResponse>(this.productsUrl);
  };
};
