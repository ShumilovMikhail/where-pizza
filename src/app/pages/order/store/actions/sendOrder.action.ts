import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { Order } from "../../types/order.interface";
import { SendOrderResponse } from "../../types/sendOrderReponse.interface";

export const sendOrderAction = createAction(ActionTypes.SEND_ORDER, props<{ order: Order }>());
export const sendOrderSuccessAction = createAction(ActionTypes.SEND_ORDER_SUCCESS, props<{ response: SendOrderResponse }>());
export const sendOrderFailureAction = createAction(ActionTypes.SEND_ORDER_FAILURE);
