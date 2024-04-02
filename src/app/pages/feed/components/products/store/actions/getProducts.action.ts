import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { GetProductsResponse } from "../../types/getProductsResponse.interface";

export const getProductsAction = createAction(ActionTypes.GET_PRODUCTS);
export const getProductsSuccessAction = createAction(ActionTypes.GET_PRODUCTS_SUCCESS, props<{ products: GetProductsResponse }>());
export const getProductsFailureAction = createAction(ActionTypes.GET_PRODUCTS_FAILURE);
