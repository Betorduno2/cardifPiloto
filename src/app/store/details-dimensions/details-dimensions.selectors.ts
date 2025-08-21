import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DetailsDimensionsState } from './details-dimensions.reducer';

export const selectDetailsDimensionsState = createFeatureSelector<DetailsDimensionsState>('detailsDimensions');

export const selectDetailsDimensionsData = createSelector(
  selectDetailsDimensionsState,
  (state: DetailsDimensionsState) => state.data
);

export const selectDetailsDimensionsLoading = createSelector(
  selectDetailsDimensionsState,
  (state: DetailsDimensionsState) => state.loading
);

export const selectDetailsDimensionsError = createSelector(
  selectDetailsDimensionsState,
  (state: DetailsDimensionsState) => state.error
);
