import { createFeatureSelector, createSelector } from '@ngrx/store';
import { KnowYourClientState } from './know-your-client.reducer';

export const selectKnowYourClientState = createFeatureSelector<KnowYourClientState>('knowYourClient');

export const selectKnowYourClientData = createSelector(
  selectKnowYourClientState,
  (state: KnowYourClientState) => state.data
);

export const selectKnowYourClientLoading = createSelector(
  selectKnowYourClientState,
  (state: KnowYourClientState) => state.loading
);

export const selectKnowYourClientError = createSelector(
  selectKnowYourClientState,
  (state: KnowYourClientState) => state.error
);
