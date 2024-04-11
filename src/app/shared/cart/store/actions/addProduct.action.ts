import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { CustomProduct } from "../../../types/customProduct.interface";
import { CartProduct } from "../../types/cartProducts.interface";

export const addProductAction = createAction(ActionTypes.ADD_PRODUCT, props<{ customProduct: CustomProduct }>());
export const addProductSuccessAction = createAction(ActionTypes.ADD_PRODUCT_SUCCESS, props<{ cartProducts: CartProduct[] }>());
export const addProductFailureAction = createAction(ActionTypes.ADD_PRODUCT_FAILURE);
