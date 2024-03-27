import { BackendError } from "../../../../../shared/types/backedError.interface";
import { ChangeUserErrorsTypes } from "./changeUserErrorsTypes";

export interface SettingsState {
  isLoading: boolean,
  errors: BackendError<ChangeUserErrorsTypes> | null
};
