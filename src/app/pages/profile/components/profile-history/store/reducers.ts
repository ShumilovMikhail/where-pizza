import { Action, createReducer, on } from "@ngrx/store";

import { ProfileHistoryState } from "../types/profileHistoryState.interface";
import { addOrderToHistoryAction, addOrderToHistoryFailureAction, addOrderToHistorySuccessAction } from "./actions/addOrderToHistory.action";
import { ProfileHistoryOrder } from "../types/profileHistoryOrder.interface";
import { getProfileHistoryOrdersAction, getProfileHistoryOrdersSuccessAction } from "./actions/getOrders.action";

const initialState: ProfileHistoryState = {
  orders: [],
  isLoading: false,
  error: null
};

const profileHistoryReducer = createReducer(initialState,
  on(addOrderToHistoryAction, (state, payload: { order: ProfileHistoryOrder }) => {
    return ({
      ...state,
      isLoading: true,
      error: null
    })
  }),
  on(addOrderToHistorySuccessAction, (state, payload: { order: ProfileHistoryOrder }) => {
    return ({
      ...state,
      isLoading: false,
    })
  }),
  on(addOrderToHistoryFailureAction, (state) => {
    return ({
      ...state,
      isLoading: false,
      error: 'add order to profile history error'
    })
  }),

  on(getProfileHistoryOrdersAction, (state) => {
    return ({
      ...state,
      isLoading: true,
      error: null
    })
  }),
  on(getProfileHistoryOrdersSuccessAction, (state, payload: { orders: ProfileHistoryOrder[] }) => {
    return ({
      ...state,
      isLoading: false,
      orders: payload.orders
    })
  }),
  on(getProfileHistoryOrdersAction, (state) => {
    return ({
      ...state,
      isLoading: false,
      error: 'get profile history orders error'
    })
  }),

)


export function reducers(state: ProfileHistoryState, action: Action) {
  return profileHistoryReducer(state, action);
};
