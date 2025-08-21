import { createReducer, on } from '@ngrx/store';
import * as DimensionsActions from './dimensions.actions';

export interface DimensionsState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: DimensionsState = {
  data: null,
  loading: false,
  error: null
};

export const dimensionsReducer = createReducer(
  initialState,
  on(DimensionsActions.loadDimensionsData, state => ({ ...state, loading: true })),
  on(DimensionsActions.loadDimensionsDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(DimensionsActions.loadDimensionsDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
