import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take } from "rxjs";

import { addProductAction, addProductFailureAction, addProductSuccessAction } from "../actions/addProduct.action";
import { CartService } from "../../services/cart.service";
import { cartProductsSelector } from "../selectors";
import { CartProduct } from "../../types/cartProduct.interface";

@Injectable()
export class AddProductEffect {
  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(addProductAction),
    switchMap(({ customProduct }) => {
      return this.store.select(cartProductsSelector).pipe(
        take(1),
        map((cartProducts: CartProduct[]) => {
          const newCartProducts = this.cartService.addProduct(customProduct, cartProducts);
          return addProductSuccessAction({ cartProducts: newCartProducts });
        }),
        catchError(() => {
          return of(addProductFailureAction())
        })
      );
    })
  ));

  constructor(private readonly actions$: Actions, private readonly cartService: CartService, private readonly store: Store) { };
};
