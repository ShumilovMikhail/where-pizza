import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { ProfileHistoryOrder } from "../../types/profileHistoryOrder.interface";

export const getProfileHistoryOrdersAction = createAction(ActionTypes.GET_PROFILE_HISTORY_ORDERS);
export const getProfileHistoryOrdersSuccessAction = createAction(ActionTypes.GET_PROFILE_HISTORY_ORDERS_SUCCESS, props<{ orders: ProfileHistoryOrder[] }>());
export const getProfileHistoryOrdersFailureAction = createAction(ActionTypes.GET_PROFILE_HISTORY_ORDERS_FAILURE);
