import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { SendVerificationEmailResponse } from "../../types/sendVerificationEmailResponse.interface";

export const sendVerificationEmailAction = createAction(ActionTypes.SEND_VERIFICATION_EMAIL);
export const sendVerificationEmailSuccessAction = createAction(ActionTypes.SEND_VERIFICATION_EMAIL_SUCCESS, props<SendVerificationEmailResponse>());
export const sendVerificationEmailFailureAction = createAction(ActionTypes.SEND_VERIFICATION_EMAIL_FAILURE);
