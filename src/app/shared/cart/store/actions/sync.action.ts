import { createAction } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";

export const resetCartAction = createAction(ActionTypes.RESET_CART);
