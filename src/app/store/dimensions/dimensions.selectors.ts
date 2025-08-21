import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DimensionsState } from './dimensions.reducer';

export const selectDimensionsState = createFeatureSelector<DimensionsState>('dimensions');

export const selectDimensionsData = createSelector(
  selectDimensionsState,
  (state: DimensionsState) => state.data
);

export const selectDimensionsLoading = createSelector(
  selectDimensionsState,
  (state: DimensionsState) => state.loading
);

export const selectDimensionsError = createSelector(
  selectDimensionsState,
  (state: DimensionsState) => state.error
);
