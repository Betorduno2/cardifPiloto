import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComponentTwoState } from './component-two.reducer';

export const selectComponentTwoState = createFeatureSelector<ComponentTwoState>('componentTwo');

export const selectComponentTwoData = createSelector(
  selectComponentTwoState,
  (state: ComponentTwoState) => state.data
);

export const selectComponentTwoLoading = createSelector(
  selectComponentTwoState,
  (state: ComponentTwoState) => state.loading
);

export const selectComponentTwoError = createSelector(
  selectComponentTwoState,
  (state: ComponentTwoState) => state.error
);
