import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { CartProduct } from "../../../types/cartProduct.interface";

export const loadProductsFromStorageAction = createAction(ActionTypes.LOAD_PRODUCTS_FROM_STORAGE);
export const loadProductsFromStorageSuccessAction = createAction(ActionTypes.LOAD_PRODUCTS_FROM_STORAGE_SUCCESS, props<{ cartProducts: CartProduct[] }>());
export const loadProductsFromStorageFailureAction = createAction(ActionTypes.LOAD_PRODUCTS_FROM_STORAGE_FAILURE);
