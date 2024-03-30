import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { UserDetails } from "../../../types/userDetails.interface";

export const getUserDataAction = createAction(ActionTypes.GET_USER_DATA);
export const getUserDataSuccessAction = createAction(ActionTypes.GET_USER_DATA_SUCCESS, props<{ userDetails: UserDetails }>());
export const getUserDataFailureAction = createAction(ActionTypes.GET_USER_DATA_FAILURE);
