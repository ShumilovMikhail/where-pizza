import { createReducer, on } from "@ngrx/store"
import { SettingsState } from "../types/settingsState.interface"
import { changeUserInfoAction, changeUserInfoFailureAction, changeUserInfoSuccessAction } from "../../../../../shared/auth/store/actions/change-user-info.action"

const initialState: SettingsState = {
  isLoading: false,
  errors: null
}

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
)
