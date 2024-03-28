import { createFeatureSelector, createSelector } from "@ngrx/store";

import { SettingsState } from "../types/settingsState.interface";

const settingsFeature = createFeatureSelector<SettingsState>('settings')

export const isLoadingSelector = createSelector(settingsFeature, (state: SettingsState) => state.isLoading);
