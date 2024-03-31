import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserDetails } from "../../../types/userDetails.interface";

export const getUserDetailsAction = createAction(ActionTypes.GET_USER_DETAILS);
export const getUserDetailsSuccessAction = createAction(ActionTypes.GET_USER_DETAILS_SUCCESS, props<{ userDetails: UserDetails }>());
export const getUserDetailsFailureAction = createAction(ActionTypes.GET_USER_DETAILS_FAILURE);
