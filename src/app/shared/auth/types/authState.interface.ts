import { BackendError } from "../../types/backedError.interface";
import { UserData } from "../../types/userData.interface";
import { UserInfo } from "../../types/userInfo.interface";
import { LoginErrorsTypes } from "./loginErrorsTypes";
import { RegisterErrorsTypes } from "./registerErrorsTypes";
import { UserInfoErrorsTypes } from "./userInfoErrorsTypes";

export interface AuthState {
  isLoading: boolean
  userData: UserData | null
  error: BackendError<RegisterErrorsTypes | LoginErrorsTypes | UserInfoErrorsTypes> | null,
  isAuthenticate: boolean,
  userInfo: UserInfo | null,
  isSubmitting: boolean
};
