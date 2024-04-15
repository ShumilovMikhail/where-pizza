import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { YourOrderState } from "../types/yourOrderState.interface";
import { Observable, switchMap, tap, withLatestFrom } from "rxjs";
import { Store } from "@ngrx/store";
import { cartProductsSelector, cartTotalPriceSelector } from "../../../../../shared/cart/store/selectors";
import { CartProduct } from "../../../../../shared/types/cartProduct.interface";

const initialState: YourOrderState = {
  products: [],
  totalPrice: 0
}

@Injectable({
  providedIn: 'root'
})
export class YourOrderStoreService extends ComponentStore<YourOrderState> {

  products$: Observable<CartProduct[]> = this.select((state: YourOrderState) => state.products);
  totalPrice$: Observable<number> = this.select((state: YourOrderState) => state.totalPrice);

  constructor(private readonly store: Store) {
    super(initialState);
  };

  readonly getCart = this.effect<void>((source$) => {
    return source$.pipe(
      switchMap(() => {
        return this.store.select(cartProductsSelector).pipe(
          withLatestFrom(this.store.select(cartTotalPriceSelector)),
          tap(([cartProducts, totalPrice]: [CartProduct[], number]) => {
            this.setProductsWithTotalPrice({ cartProducts, totalPrice });
          })
        );
      })
    );
  });

  readonly setProductsWithTotalPrice = this.updater((state, payload: { cartProducts: CartProduct[], totalPrice: number }) => {
    return ({
      ...state,
      products: [...payload.cartProducts],
      totalPrice: payload.totalPrice
    });
  });

};
