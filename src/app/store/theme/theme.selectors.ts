import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ThemeState } from './theme.state';

export const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectCurrentTheme = createSelector(
  selectThemeState,
  (state: ThemeState) => state.currentTheme
);

export const selectAvailableThemes = createSelector(
  selectThemeState,
  (state: ThemeState) => state.availableThemes
);

export const selectThemeLoading = createSelector(
  selectThemeState,
  (state: ThemeState) => state.isLoading
);
