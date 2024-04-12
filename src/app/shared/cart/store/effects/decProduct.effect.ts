import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, take } from "rxjs";

import { CartService } from "../../services/cart.service";
import { cartProductsSelector } from "../selectors";
import { CartProduct } from "../../types/cartProduct.interface";
import { decProductAction, decProductFailureAction, decProductSuccessAction } from "../actions/decProduct.action";

@Injectable()
export class DecProductEffect {
  decProduct$ = createEffect(() => this.actions$.pipe(
    ofType(decProductAction),
    switchMap(({ cartProduct }) => {
      return this.store.select(cartProductsSelector).pipe(
        take(1),
        map((cartProducts: CartProduct[]) => {
          const newCartProducts = this.cartService.incProduct(cartProduct, cartProducts);
          return decProductSuccessAction({ cartProducts: newCartProducts });
        }),
        catchError(() => {
          return of(decProductFailureAction())
        })
      );
    })
  ));

  constructor(private readonly actions$: Actions, private readonly cartService: CartService, private readonly store: Store) { };
};
