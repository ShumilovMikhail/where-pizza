import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { AuthRequest } from "../../types/authRequest.interface";
import { AuthResponse } from "../../types/authResponse.interface";
import { BackendError } from "../../../types/backedError.interface";
import { RegisterErrorsTypes } from "../../types/registerErrorsTypes";

export const loginAction = createAction(ActionTypes.LOGIN, props<{ user: AuthRequest }>());
export const loginSuccessAction = createAction(ActionTypes.LOGIN_SUCCESS, props<{ userData: AuthResponse }>());
export const loginFailureAction = createAction(ActionTypes.LOGIN_FAILURE, props<{ error: BackendError<RegisterErrorsTypes> }>());
