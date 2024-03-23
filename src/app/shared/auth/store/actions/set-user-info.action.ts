import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserInfo } from "../../../types/userInfo.interface";

export const setUserInfoAction = createAction(ActionTypes.SET_USER_INFO, props<{ userInfo: UserInfo }>());
export const setUserInfoSuccessAction = createAction(ActionTypes.SET_USER_INFO_SUCCESS, props<{ userInfo: UserInfo }>());
export const setUserInfoFailureAction = createAction(ActionTypes.SET_USER_INFO_FAILURE);
