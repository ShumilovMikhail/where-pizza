import { Action, createReducer, on } from "@ngrx/store";

import { ProfileHistoryState } from "../types/profileHistoryState.interface";
import { addOrderToHistoryAction, addOrderToHistoryFailureAction, addOrderToHistorySuccessAction } from "./actions/addOrderToHistory.action";
import { ProfileHistoryOrder } from "../types/profileHistoryOrder.interface";

const initialState: ProfileHistoryState = {
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
      error: 'profile history error'
    })
  }),

)


export function reducers(state: ProfileHistoryState, action: Action) {
  return profileHistoryReducer(state, action);
};
