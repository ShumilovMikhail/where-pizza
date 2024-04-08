import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { ProductsService } from "../../services/products.service";
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from "../actions/getProducts.action";
import { GetProductsResponse } from "../../types/getProductsResponse.interface";

@Injectable()
export class GetProductsEffect {
  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsAction),
    switchMap(() => {
      return this.productsService.getProducts().pipe(
        map((products: GetProductsResponse) => {
          return getProductsSuccessAction({ products });
        }),
        catchError(() => {
          return of(getProductsFailureAction());
        })
      );
    })
  ));

  constructor(private actions$: Actions, private productsService: ProductsService) { };
};
