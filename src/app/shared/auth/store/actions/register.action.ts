import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { AuthRequest } from "../../types/authRequest.interface";
import { AuthResponse } from "../../types/authResponse.interface";
import { BackendError } from "../../../types/backedError.interface";
import { RegisterErrorsTypes } from "../../types/registerErrorsTypes";

export const registerAction = createAction(ActionTypes.REGISTER, props<{ user: AuthRequest }>());
export const registerSuccessAction = createAction(ActionTypes.REGISTER_SUCCESS, props<{ userData: AuthResponse }>());
export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{ error: BackendError<RegisterErrorsTypes> }>());
