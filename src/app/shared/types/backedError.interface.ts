import { BackendErrors } from "./backendErrors.interface"

export interface BackendError<T> {
  code: number
  errors: BackendErrors[]
  message: T
};
