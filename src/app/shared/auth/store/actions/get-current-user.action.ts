import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { UserData } from "../../../types/userData.interface";
import { UserInfo } from "../../../types/userInfo.interface";

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER);
export const getCurrentUserSuccessAction = createAction(ActionTypes.GET_CURRENT_USER_SUCCESS, props<{ userData: UserData, userInfo: UserInfo }>());
export const getCurrentUserFailureAction = createAction(ActionTypes.GET_CURRENT_USER_FAILURE);
