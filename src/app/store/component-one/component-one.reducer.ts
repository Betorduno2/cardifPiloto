import { createReducer, on } from '@ngrx/store';
import * as ComponentOneActions from './component-one.actions';

export interface ComponentOneState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: ComponentOneState = {
  data: null,
  loading: false,
  error: null
};

export const componentOneReducer = createReducer(
  initialState,
  on(ComponentOneActions.loadComponentOneData, state => ({ ...state, loading: true })),
  on(ComponentOneActions.loadComponentOneDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(ComponentOneActions.loadComponentOneDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
