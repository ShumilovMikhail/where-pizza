import { Action, createReducer, on } from "@ngrx/store";

import { AuthState } from "../types/authState.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from "./actions/register.action";
import { UserData } from "../../types/userData.interface";
import { BackendError } from "../../types/backedError.interface";
import { RegisterErrorsTypes } from "../types/registerErrorsTypes";
import { setUserInfoAction, setUserInfoFailureAction, setUserInfoSuccessAction } from "./actions/set-user-info.action";
import { UserInfo } from "../../types/userInfo.interface";
import { loginAction, loginFailureAction, loginSuccessAction } from "./actions/login.action";
import { getUserInfoAction, getUserInfoFailureAction, getUserInfoSuccessAction } from "./actions/get-user-info.action";
import { UserInfoErrorsTypes } from "../types/userInfoErrorsTypes";
import { changeUserInfoSuccessAction } from "./actions/change-user-info.action";
import { changeUserPasswordSuccessAction } from "./actions/change-user-password.action";
import { UserDetails } from "../../types/userDetails.interface";
import { getUserDetailsAction, getUserDetailsFailureAction, getUserDetailsSuccessAction } from "./actions/get-user-details.action";
import { autoLoginFailureAction, autoLoginSuccessAction } from "./actions/auto-login.action";
import { logoutAction } from "./actions/sync.action";

const initialState: AuthState = {
  isLoading: false,
  userData: null,
  error: null,
  isAuthenticate: false,
  userInfo: null,
  isSubmitting: false
};

const authReducer = createReducer(initialState,
  on(registerAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
      error: null,
      isSubmitting: true
    });
  }),
  on(registerSuccessAction, (state, payload: { userData: UserData }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      userData: payload.userData,
      error: null,
      isSubmitting: false
    });
  }),
  on(registerFailureAction, (state, payload: { error: BackendError<RegisterErrorsTypes> }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      error: payload.error,
      isSubmitting: false
    });
  }),

  on(setUserInfoAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
      isSubmitting: true
    });
  }),
  on(setUserInfoSuccessAction, (state, payload: { userInfo: UserInfo }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      userInfo: payload.userInfo,
      isAuthenticate: true,
      isSubmitting: false
    });
  }),
  on(setUserInfoFailureAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: false,
      isSubmitting: false
    });
  }),

  on(getUserInfoAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
    });
  }),
  on(getUserInfoSuccessAction, (state, payload: { userInfo: UserInfo }): AuthState => {
    return ({
      ...state,
      userInfo: payload.userInfo,
      isLoading: false,
      isAuthenticate: true,
      isSubmitting: false
    });
  }),
  on(getUserInfoFailureAction, (state, payload: { error: BackendError<UserInfoErrorsTypes> }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      error: payload.error,
      isSubmitting: false
    });
  }),

  on(loginAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
      error: null,
      isSubmitting: true
    });
  }),
  on(loginSuccessAction, (state, payload: { userData: UserData }): AuthState => {
    return ({
      ...state,
      userData: payload.userData,
      error: null,
    });
  }),
  on(loginFailureAction, (state, payload: { error: BackendError<RegisterErrorsTypes> }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      error: payload.error,
      isSubmitting: false
    });
  }),

  on(autoLoginFailureAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
    });
  }),
  on(autoLoginSuccessAction, (state, payload: { userInfo: UserInfo, userData: UserData }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      userInfo: payload.userInfo,
      userData: payload.userData,
      isAuthenticate: true,
    });
  }),
  on(autoLoginFailureAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: false,
    });
  }),

  on(changeUserInfoSuccessAction, (state, payload: { userInfo: UserInfo }): AuthState => {
    return ({
      ...state,
      userInfo: payload.userInfo
    });
  }),

  on(changeUserPasswordSuccessAction, (state: AuthState, payload: { userData: UserData }): AuthState => {
    return ({
      ...state,
      userData: payload.userData
    });
  }),

  on(getUserDetailsAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: true,
    });
  }),
  on(getUserDetailsSuccessAction, (state, payload: { userDetails: UserDetails }): AuthState => {
    return ({
      ...state,
      isLoading: false,
      userData: {
        ...state.userData,
        emailVerified: payload.userDetails.emailVerified
      }
    });
  }),
  on(getUserDetailsFailureAction, (state): AuthState => {
    return ({
      ...state,
      isLoading: false,
    });
  }),

  on(logoutAction, (state): AuthState => {
    return ({
      ...initialState
    });
  })

);

export function reducers(state: AuthState, action: Action) {
  return authReducer(state, action);
};
