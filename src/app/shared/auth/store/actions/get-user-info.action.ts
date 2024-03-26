import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserInfo } from "../../../types/userInfo.interface";
import { BackendError } from "../../../types/backedError.interface";
import { UserInfoErrorsTypes } from "../../types/userInfoErrorsTypes";

export const getUserInfoAction = createAction(ActionTypes.GET_USER_INFO);
export const getUserInfoSuccessAction = createAction(ActionTypes.GET_USER_INFO_SUCCESS, props<{ userInfo: UserInfo }>());
export const getUserInfoFailureAction = createAction(ActionTypes.GET_USER_INFO_FAILURE, props<{ error: BackendError<UserInfoErrorsTypes> }>());
