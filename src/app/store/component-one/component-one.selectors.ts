import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ComponentOneState } from './component-one.reducer';

export const selectComponentOneState = createFeatureSelector<ComponentOneState>('componentOne');

export const selectComponentOneData = createSelector(
  selectComponentOneState,
  (state: ComponentOneState) => state.data
);

export const selectComponentOneLoading = createSelector(
  selectComponentOneState,
  (state: ComponentOneState) => state.loading
);

export const selectComponentOneError = createSelector(
  selectComponentOneState,
  (state: ComponentOneState) => state.error
);
