import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { addProductSuccessAction } from "../actions/addProduct.action";
import { DataStorageService } from "../../../services/dataStorage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";

@Injectable()
export class CartEffect {
  cart$ = createEffect(() => this.actions$.pipe(
    ofType(addProductSuccessAction),
    tap(({ cartProducts }) => {
      this.dataStorageService.setItem(DataStorageTypes.CART_PRODUCTS, cartProducts)
    })
  ), { dispatch: false });

  constructor(private readonly actions$: Actions, private readonly dataStorageService: DataStorageService) { };
};
