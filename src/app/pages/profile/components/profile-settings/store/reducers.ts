import { Action, createReducer, on } from "@ngrx/store"

import { SettingsState } from "../types/settingsState.interface"
import { changeUserInfoAction, changeUserInfoFailureAction, changeUserInfoSuccessAction } from "../../../../../shared/auth/store/actions/change-user-info.action"
import { changeUserPasswordAction, changeUserPasswordFailureAction, changeUserPasswordSuccessAction } from "../../../../../shared/auth/store/actions/change-user-password.action";

const initialState: SettingsState = {
  isLoading: false,
};

const settingsReducer = createReducer(
  initialState,
  on(changeUserInfoAction, (state): SettingsState => {
    return ({
      ...state,
      isLoading: true
    });
  }),
  on(changeUserInfoSuccessAction, (state): SettingsState => {
    return ({
      ...state,
      isLoading: false
    });
  }),
  on(changeUserInfoFailureAction, (state): SettingsState => {
    return ({
      ...state,
      isLoading: false
    });
  }),

  on(changeUserPasswordAction, (state): SettingsState => {
    return ({
      ...state,
      isLoading: true
    });
  }),
  on(changeUserPasswordSuccessAction, (state): SettingsState => {
    return ({
      ...state,
      isLoading: false
    });
  }),
  on(changeUserPasswordFailureAction, (state): SettingsState => {
    return ({
      ...state,
      isLoading: false
    });
  }),
);

export function reducers(state: SettingsState, action: Action) {
  return settingsReducer(state, action);
};
