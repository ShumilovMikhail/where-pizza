import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { Order } from "../../types/order.interface";
import { SendOrderResponse } from "../../types/sendOrderResponse.interface";
import { OrderNumber } from "../../types/orderNumber.interface";

export const sendOrderAction = createAction(ActionTypes.SEND_ORDER, props<{ order: Order }>());
export const sendOrderSuccessAction = createAction(ActionTypes.SEND_ORDER_SUCCESS, props<OrderNumber>());
export const sendOrderFailureAction = createAction(ActionTypes.SEND_ORDER_FAILURE);
