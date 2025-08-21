import { createReducer, on } from '@ngrx/store';
import * as ComponentTwoActions from './component-two.actions';

export interface ComponentTwoState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: ComponentTwoState = {
  data: null,
  loading: false,
  error: null
};

export const componentTwoReducer = createReducer(
  initialState,
  on(ComponentTwoActions.loadComponentTwoData, state => ({ ...state, loading: true })),
  on(ComponentTwoActions.loadComponentTwoDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(ComponentTwoActions.loadComponentTwoDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
