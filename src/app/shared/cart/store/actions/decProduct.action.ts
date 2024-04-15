import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { CartProduct } from "../../../types/cartProduct.interface";

export const decProductAction = createAction(ActionTypes.DEC_PRODUCT, props<{ cartProduct: CartProduct }>());
export const decProductSuccessAction = createAction(ActionTypes.DEC_PRODUCT_SUCCESS, props<{ cartProducts: CartProduct[] }>());
export const decProductFailureAction = createAction(ActionTypes.DEC_PRODUCT_FAILURE);
