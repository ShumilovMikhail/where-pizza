import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../actionTypes";
import { GetFiltersResponse } from "../../types/getFiltersResponse.interface";

export const getFiltersAction = createAction(ActionTypes.GET_FILTERS);
export const getFiltersSuccessAction = createAction(ActionTypes.GET_FILTERS_SUCCESS, props<{ filters: GetFiltersResponse }>());
export const getFiltersFailureAction = createAction(ActionTypes.GET_FILTERS_FAILURE);
