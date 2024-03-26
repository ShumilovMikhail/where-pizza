import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AuthState } from "../types/authState.interface";

const authFeature = createFeatureSelector<AuthState>('auth');

export const isLoadingSelector = createSelector(authFeature, (state: AuthState) => state.isLoading);
export const userDataSelector = createSelector(authFeature, (state: AuthState) => state.userData);
export const errorSelector = createSelector(authFeature, (state: AuthState) => state.error);
export const isAuthenticateSelector = createSelector(authFeature, (state: AuthState) => state.isAuthenticate);
export const userInfoSelector = createSelector(authFeature, (state: AuthState) => state.userInfo);
export const isSubmittingSelector = createSelector(authFeature, (state: AuthState) => state.isSubmitting)
