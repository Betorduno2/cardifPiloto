import { createAction, props } from '@ngrx/store';

export const loadDimensionsData = createAction('[Dimensions] Load Data');
export const loadDimensionsDataSuccess = createAction('[Dimensions] Load Data Success', props<{ data: any }>());
export const loadDimensionsDataFailure = createAction('[Dimensions] Load Data Failure', props<{ error: any }>());
