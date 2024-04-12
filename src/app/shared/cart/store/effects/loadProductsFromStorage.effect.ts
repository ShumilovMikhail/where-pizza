import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of, switchMap, } from "rxjs";

import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { loadProductsFromStorageAction, loadProductsFromStorageFailureAction, loadProductsFromStorageSuccessAction } from "../actions/loadProductsFromStorage.action";
import { CartProduct } from "../../types/cartProduct.interface";

@Injectable()
export class LoadProductsFromStorageEffect {
  loadProductsFromStorage$ = createEffect(() => this.actions$.pipe(
    ofType(loadProductsFromStorageAction),
    switchMap(() => {
      const cartProducts = this.dataStorageService.getItem(DataStorageTypes.CART_PRODUCTS) as CartProduct[];
      if (cartProducts) {
        return of(loadProductsFromStorageSuccessAction({ cartProducts }));
      };
      return of(loadProductsFromStorageFailureAction());
    })
  ));

  constructor(private readonly actions$: Actions, private readonly dataStorageService: DataStorageService) { };
};
