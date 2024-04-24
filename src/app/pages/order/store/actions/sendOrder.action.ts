import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { Order } from "../../../../shared/types/order.interface";
import { SendOrderResponse } from "../../types/sendOrderResponse.interface";

export const sendOrderAction = createAction(ActionTypes.SEND_ORDER, props<{ order: Order }>());
export const sendOrderSuccessAction = createAction(ActionTypes.SEND_ORDER_SUCCESS, props<{ order: SendOrderResponse }>());
export const sendOrderFailureAction = createAction(ActionTypes.SEND_ORDER_FAILURE);
