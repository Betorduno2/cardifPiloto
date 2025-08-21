import { createReducer, on } from '@ngrx/store';
import * as ProtectionsActions from './protections.actions';

export interface ProtectionsState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: ProtectionsState = {
  data: null,
  loading: false,
  error: null
};

export const protectionsReducer = createReducer(
  initialState,
  on(ProtectionsActions.loadProtectionsData, state => ({ ...state, loading: true })),
  on(ProtectionsActions.loadProtectionsDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(ProtectionsActions.loadProtectionsDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
