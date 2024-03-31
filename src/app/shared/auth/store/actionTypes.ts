export enum ActionTypes {
  REGISTER = '[Auth] Register',
  REGISTER_SUCCESS = '[Auth] Register success',
  REGISTER_FAILURE = '[Auth] Register failure',

  LOGIN = '[Auth] Login',
  LOGIN_SUCCESS = '[Auth] Login success',
  LOGIN_FAILURE = '[Auth] Login failure',

  SET_USER_INFO = '[Auth] Set user info',
  SET_USER_INFO_SUCCESS = '[Auth] Set user info success',
  SET_USER_INFO_FAILURE = '[Auth] Set user info failure',

  GET_USER_INFO = '[Auth] Get user info',
  GET_USER_INFO_SUCCESS = '[Auth] Get user info success',
  GET_USER_INFO_FAILURE = '[Auth] Get user info failure',

  AUTO_LOGIN = '[Auth] Auto login',
  AUTO_LOGIN_SUCCESS = '[Auth] Auto login success',
  AUTO_LOGIN_FAILURE = '[Auth] Auto login failure',

  CHANGE_USER_INFO = '[Auth] Change user info',
  CHANGE_USER_INFO_SUCCESS = '[Auth] Change user info success',
  CHANGE_USER_INFO_FAILURE = '[Auth] Change user info failure',

  CHANGE_USER_PASSWORD = '[Auth] Change user password',
  CHANGE_USER_PASSWORD_SUCCESS = '[Auth] Change user password success',
  CHANGE_USER_PASSWORD_FAILURE = '[Auth] Change user password failure',

  GET_USER_DETAILS = '[Auth] Get user details',
  GET_USER_DETAILS_SUCCESS = '[Auth] Get user details success',
  GET_USER_DETAILS_FAILURE = '[Auth] Get user details failure',
};
