import { BackendError } from "../../types/backedError.interface";
import { UserData } from "../../types/userData.interface";
import { RegisterErrorsTypes } from "./registerErrorsTypes";

export interface AuthState {
  isLoading: boolean
  userData: UserData | null
  error: BackendError<RegisterErrorsTypes> | null,
  isAuthenticate: boolean
};
