import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ProfileHistoryState } from "../types/profileHistoryState.interface";

const profileHistoryFeature = createFeatureSelector<ProfileHistoryState>('profile history');

export const isLoadingSelector = createSelector(profileHistoryFeature, (state: ProfileHistoryState) => state.isLoading);
export const errorSelector = createSelector(profileHistoryFeature, (state: ProfileHistoryState) => state.error);
