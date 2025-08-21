import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComponentFourState } from './component-four.reducer';

export const selectComponentFourState = createFeatureSelector<ComponentFourState>('componentFour');

export const selectComponentFourData = createSelector(
  selectComponentFourState,
  (state: ComponentFourState) => state.data
);

export const selectComponentFourLoading = createSelector(
  selectComponentFourState,
  (state: ComponentFourState) => state.loading
);

export const selectComponentFourError = createSelector(
  selectComponentFourState,
  (state: ComponentFourState) => state.error
);
