import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { ProductsService } from "../../services/products.service";
import { getFiltersAction, getFiltersFailureAction, getFiltersSuccessAction } from "../actions/getFilters.action";
import { GetFiltersResponse } from "../../types/getFiltersResponse.interface";

@Injectable()
export class GetFiltersEffect {
  getFilters$ = createEffect(() => this.actions$.pipe(
    ofType(getFiltersAction),
    switchMap(() => {
      return this.productsService.getFilters().pipe(
        map((filters: GetFiltersResponse) => {
          return getFiltersSuccessAction({ filters });
        }),
        catchError(() => {
          return of(getFiltersFailureAction());
        })
      );
    })
  ));

  constructor(private actions$: Actions, private productsService: ProductsService) { };
};
