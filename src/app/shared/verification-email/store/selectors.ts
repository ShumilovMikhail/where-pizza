import { createFeatureSelector, createSelector } from "@ngrx/store";
import { VerificationEmailState } from "../types/verificationEmailState.interface";

const verificationEmailFeature = createFeatureSelector<VerificationEmailState>('Verification Email');

export const isLoadingSelector = createSelector(verificationEmailFeature, (state: VerificationEmailState) => state.isLoading);
export const isSubmittingSelector = createSelector(verificationEmailFeature, (state: VerificationEmailState) => state.isSubmitting);
export const codeSentSelector = createSelector(verificationEmailFeature, (state: VerificationEmailState) => state.codeSent);
export const isSuccessSelector = createSelector(verificationEmailFeature, (state: VerificationEmailState) => state.isSuccess);
