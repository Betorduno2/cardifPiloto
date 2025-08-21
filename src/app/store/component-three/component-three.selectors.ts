import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComponentThreeState } from './component-three.reducer';

export const selectComponentThreeState = createFeatureSelector<ComponentThreeState>('componentThree');

export const selectComponentThreeData = createSelector(
  selectComponentThreeState,
  (state: ComponentThreeState) => state.data
);

export const selectComponentThreeLoading = createSelector(
  selectComponentThreeState,
  (state: ComponentThreeState) => state.loading
);

export const selectComponentThreeError = createSelector(
  selectComponentThreeState,
  (state: ComponentThreeState) => state.error
);
