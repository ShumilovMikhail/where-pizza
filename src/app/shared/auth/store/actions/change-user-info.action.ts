import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserInfo } from "../../../types/userInfo.interface";

export const changeUserInfoAction = createAction(ActionTypes.CHANGE_USER_INFO, props<{ userInfo: UserInfo }>());
export const changeUserInfoSuccessAction = createAction(ActionTypes.CHANGE_USER_INFO_SUCCESS, props<{ userInfo: UserInfo }>());
export const changeUserInfoFailureAction = createAction(ActionTypes.CHANGE_USER_INFO_FAILURE);
