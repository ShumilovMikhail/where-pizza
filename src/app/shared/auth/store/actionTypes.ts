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

  GET_CURRENT_USER = '[Auth] Get current user',
  GET_CURRENT_USER_SUCCESS = '[Auth] Get current user success',
  GET_CURRENT_USER_FAILURE = '[Auth] Get current user failure',

  CHANGE_USER_INFO = '[Auth] Change user info',
  CHANGE_USER_INFO_SUCCESS = '[Auth] Change user info success',
  CHANGE_USER_INFO_FAILURE = '[Auth] Change user info failure',

  CHANGE_USER_EMAIL = '[Auth] Change user email',
  CHANGE_USER_EMAIL_SUCCESS = '[Auth] Change user email success',
  CHANGE_USER_EMAIL_FAILURE = '[Auth] Change user email failure',

  CHANGE_USER_PASSWORD = '[Auth] Change user password',
  CHANGE_USER_PASSWORD_SUCCESS = '[Auth] Change user password success',
  CHANGE_USER_PASSWORD_FAILURE = '[Auth] Change user password failure',
};
