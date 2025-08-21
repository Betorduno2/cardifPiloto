import { createReducer, on } from '@ngrx/store';
import * as ComponentFourActions from './component-four.actions';

export interface ComponentFourState {
  data: any;
  loading: boolean;
  error: any;
}

export const initialState: ComponentFourState = {
  data: null,
  loading: false,
  error: null
};

export const componentFourReducer = createReducer(
  initialState,
  on(ComponentFourActions.loadComponentFourData, state => ({ ...state, loading: true })),
  on(ComponentFourActions.loadComponentFourDataSuccess, (state, { data }) => ({ ...state, loading: false, data })),
  on(ComponentFourActions.loadComponentFourDataFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
