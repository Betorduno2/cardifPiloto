import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProtectionsState } from './protections.reducer';

export const selectProtectionsState = createFeatureSelector<ProtectionsState>('protections');

export const selectProtectionsData = createSelector(
  selectProtectionsState,
  (state: ProtectionsState) => state.data
);

export const selectProtectionsLoading = createSelector(
  selectProtectionsState,
  (state: ProtectionsState) => state.loading
);

export const selectProtectionsError = createSelector(
  selectProtectionsState,
  (state: ProtectionsState) => state.error
);
