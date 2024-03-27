import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";

export const changeUserPasswordAction = createAction(ActionTypes.CHANGE_USER_PASSWORD, props<{ password: string }>());
export const changeUserPasswordSuccessAction = createAction(ActionTypes.CHANGE_USER_PASSWORD_SUCCESS);
export const changeUserPasswordFailureAction = createAction(ActionTypes.CHANGE_USER_PASSWORD_FAILURE);
