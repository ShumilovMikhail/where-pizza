import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { CartProduct } from "../../../types/cartProduct.interface";

export const resetCartAction = createAction(ActionTypes.RESET_CART);
export const setProductsAction = createAction(ActionTypes.SET_PRODUCTS, props<{ cartProducts: CartProduct[] }>());
