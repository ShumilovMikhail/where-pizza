import { Action, createReducer, on } from "@ngrx/store";

import { AuthState } from "../types/authState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { UserData } from "../../types/userData.interface";
import { BackendError } from "../../types/backedError.interface";
import { RegisterErrorsTypes } from "../types/registerErrorsTypes";
import { setUserInfoAction, setUserInfoFailureAction, setUserInfoSuccessAction } from "./actions/set-user-info.action";
import { UserInfo } from "../../types/userInfo.interface";

const initialState: AuthState = {
  isLoading: false,
  userData: null,
  error: null,
  isAuthenticate: false,
  userInfo: null
};

const authReducer = createReducer(initialState,
  on(registerAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
      error: null
    })
  }),
  on(registerSuccessAction, (state, payload: { userData: UserData }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      userData: payload.userData,
      error: null,
      isAuthenticate: true
    })
  }),
  on(registerFailureAction, (state, payload: { error: BackendError<RegisterErrorsTypes> }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      error: payload.error
    })
  }),
  on(setUserInfoAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
      error: null
    })
  }),
  on(setUserInfoSuccessAction, (state, payload: { userInfo: UserInfo }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      error: null,
      userInfo: payload.userInfo
    })
  }),
  on(setUserInfoFailureAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: false,
    })
  }),

);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
};
