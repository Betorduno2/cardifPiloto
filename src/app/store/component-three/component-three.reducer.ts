import { createReducer, on } from '@ngrx/store';
import * as ComponentThreeActions from './component-three.actions';

export interface ComponentThreeState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: ComponentThreeState = {
  data: null,
  loading: false,
  error: null
};

export const componentThreeReducer = createReducer(
  initialState,
  on(ComponentThreeActions.loadComponentThreeData, state => ({ ...state, loading: true })),
  on(ComponentThreeActions.loadComponentThreeDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(ComponentThreeActions.loadComponentThreeDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
