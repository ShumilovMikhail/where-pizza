import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { UserData } from "../../../types/userData.interface";
import { UserInfo } from "../../../types/userInfo.interface";

export const autoLoginAction = createAction(ActionTypes.AUTO_LOGIN);
export const autoLoginSuccessAction = createAction(ActionTypes.AUTO_LOGIN_SUCCESS, props<{ userData: UserData, userInfo: UserInfo }>());
export const autoLoginFailureAction = createAction(ActionTypes.AUTO_LOGIN_FAILURE);
