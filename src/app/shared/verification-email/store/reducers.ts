import { Action, createReducer, on } from "@ngrx/store";

import { VerificationEmailState } from "../types/verificationEmailState.interface";
import { sendVerificationEmailAction, sendVerificationEmailFailureAction, sendVerificationEmailSuccessAction } from "./actions/send-verification-email.action";

const initialState: VerificationEmailState = {
  isLoading: false,
  isSubmitting: false,
  codeSent: false,
  isSuccess: false
};


const verificationEmailReducer = createReducer(initialState,
  on(sendVerificationEmailAction, (state): VerificationEmailState => {
    return ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    });
  }),
  on(sendVerificationEmailSuccessAction, (state): VerificationEmailState => {
    return ({
      ...state,
      isLoading: false,
      isSubmitting: false,
      codeSent: true
    });
  }),
  on(sendVerificationEmailFailureAction, (state): VerificationEmailState => {
    return ({
      ...state,
      isLoading: false,
      isSubmitting: false,
    });
  }),

);

export function reducers(state: VerificationEmailState, action: Action) {
  return verificationEmailReducer(state, action);
};
