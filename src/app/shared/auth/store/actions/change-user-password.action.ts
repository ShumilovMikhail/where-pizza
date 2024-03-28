import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { ChangeUserDataResponse } from "../../types/changeUserDataResponse.interface";

export const changeUserPasswordAction = createAction(ActionTypes.CHANGE_USER_PASSWORD, props<{ password: string }>());
export const changeUserPasswordSuccessAction = createAction(ActionTypes.CHANGE_USER_PASSWORD_SUCCESS, props<{ response: ChangeUserDataResponse }>());
export const changeUserPasswordFailureAction = createAction(ActionTypes.CHANGE_USER_PASSWORD_FAILURE);
