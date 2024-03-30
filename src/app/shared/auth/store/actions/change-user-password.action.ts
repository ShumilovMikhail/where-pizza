import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserData } from "../../../types/userData.interface";

export const changeUserPasswordAction = createAction(ActionTypes.CHANGE_USER_PASSWORD, props<{ password: string }>());
export const changeUserPasswordSuccessAction = createAction(ActionTypes.CHANGE_USER_PASSWORD_SUCCESS, props<{ userData: UserData }>());
export const changeUserPasswordFailureAction = createAction(ActionTypes.CHANGE_USER_PASSWORD_FAILURE);
