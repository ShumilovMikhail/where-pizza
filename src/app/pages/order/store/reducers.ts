import { Action, createReducer, on } from "@ngrx/store";
import { OrderState } from "../types/orderState.interface";
import { sendOrderAction, sendOrderFailureAction, sendOrderSuccessAction } from "./actions/sendOrder.action";
import { Order } from "../types/order.interface";
import { SendOrderResponse } from "../types/sendOrderReponse.interface";

const initialState: OrderState = {
  isLoading: false,
  error: null
}


const orderReducer = createReducer(initialState,
  on(sendOrderAction, (state, payload: { order: Order }) => {
    return ({
      ...state,
      isLoading: true,
      error: null,
    });
  }),
  on(sendOrderSuccessAction, (state, payload: { response: SendOrderResponse }) => {
    return ({
      ...state,
      isLoading: false,
      error: null,
    });
  }),
  on(sendOrderFailureAction, (state) => {
    return ({
      ...state,
      isLoading: false,
      error: 'send order error',
    });
  }),
);


export function reducers(state: OrderState, action: Action) {
  return orderReducer(state, action);
};

