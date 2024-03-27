import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserData } from "../../../types/userData.interface";

export const changeUserEmailAction = createAction(ActionTypes.CHANGE_USER_EMAIL, props<{ email: string }>());
export const changeUserEmailSuccessAction = createAction(ActionTypes.CHANGE_USER_EMAIL_SUCCESS, props<{ userData: UserData }>());
export const changeUserEmailFailureAction = createAction(ActionTypes.CHANGE_USER_EMAIL_FAILURE);
