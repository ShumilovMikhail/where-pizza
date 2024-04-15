import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { CartProduct } from "../../../types/cartProduct.interface";

export const incProductAction = createAction(ActionTypes.INC_PRODUCT, props<{ cartProduct: CartProduct }>());
export const incProductSuccessAction = createAction(ActionTypes.INC_PRODUCT_SUCCESS, props<{ cartProducts: CartProduct[] }>());
export const incProductFailureAction = createAction(ActionTypes.INC_PRODUCT_FAILURE);
