import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { ProfileHistoryOrder } from "../../types/profileHistoryOrder.interface";

export const addOrderToHistoryAction = createAction(ActionTypes.ADD_ORDER_TO_HISTORY, props<{ order: ProfileHistoryOrder }>());
export const addOrderToHistorySuccessAction = createAction(ActionTypes.ADD_ORDER_TO_HISTORY_SUCCESS, props<{ order: ProfileHistoryOrder }>());
export const addOrderToHistoryFailureAction = createAction(ActionTypes.ADD_ORDER_TO_HISTORY_FAILURE);
