import { createReducer, on } from '@ngrx/store';
import * as DetailsDimensionsActions from './details-dimensions.actions';

export interface DetailsDimensionsState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: DetailsDimensionsState = {
  data: null,
  loading: false,
  error: null
};

export const detailsDimensionsReducer = createReducer(
  initialState,
  on(DetailsDimensionsActions.loadDetailsDimensionsData, state => ({ ...state, loading: true })),
  on(DetailsDimensionsActions.loadDetailsDimensionsDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(DetailsDimensionsActions.loadDetailsDimensionsDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
