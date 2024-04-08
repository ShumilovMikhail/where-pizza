import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ProductsState } from "../types/productsState.interface";

const productsFeature = createFeatureSelector<ProductsState>('products');

export const isLoadingSelector = createSelector(productsFeature, (state: ProductsState) => state.isLoading);
export const errorSelector = createSelector(productsFeature, (state: ProductsState) => state.error);
export const productsSelector = createSelector(productsFeature, (state: ProductsState) => state.products);
export const filtersSelector = createSelector(productsFeature, (state: ProductsState) => state.filters);
export const categoriesSelector = createSelector(productsFeature, (state: ProductsState) => state.products ? Object.keys(state.products).sort((a, b) => state.products[a].id - state.products[b].id) : null);
