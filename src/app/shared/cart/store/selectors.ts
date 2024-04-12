import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartState } from "../types/cartState.interface";

const cartFeature = createFeatureSelector<CartState>('cart');

export const cartProductsSelector = createSelector(cartFeature, (state: CartState) => state.products);
export const cartTotalPriceSelector = createSelector(cartFeature, (state: CartState) => state.totalPrice);
export const isLoadingSelector = createSelector(cartFeature, (state: CartState) => state.isLoading);
export const errorSelector = createSelector(cartFeature, (state: CartState) => state.error);

