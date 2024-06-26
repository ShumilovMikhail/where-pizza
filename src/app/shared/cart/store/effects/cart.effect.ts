import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";

import { addProductSuccessAction } from "../actions/addProduct.action";
import { DataStorageService } from "../../../services/data-storage.service";
import { DataStorageTypes } from "../../../types/dataStorageTypes";
import { incProductSuccessAction } from "../actions/incProduct.action";
import { decProductSuccessAction } from "../actions/decProduct.action";

@Injectable()
export class CartEffect {
  cart$ = createEffect(() => this.actions$.pipe(
    ofType(addProductSuccessAction, incProductSuccessAction, decProductSuccessAction),
    tap(({ cartProducts }) => {
      this.dataStorageService.setItem(DataStorageTypes.CART_PRODUCTS, cartProducts)
    })
  ), { dispatch: false });

  constructor(private readonly actions$: Actions, private readonly dataStorageService: DataStorageService) { };
};
