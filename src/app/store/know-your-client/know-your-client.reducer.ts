import { createReducer, on } from '@ngrx/store';
import * as KnowYourClientActions from './know-your-client.actions';

export interface KnowYourClientState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: KnowYourClientState = {
  data: null,
  loading: false,
  error: null
};

export const knowYourClientReducer = createReducer(
  initialState,
  on(KnowYourClientActions.loadKnowYourClientData, state => ({ ...state, loading: true })),
  on(KnowYourClientActions.loadKnowYourClientDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(KnowYourClientActions.loadKnowYourClientDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
