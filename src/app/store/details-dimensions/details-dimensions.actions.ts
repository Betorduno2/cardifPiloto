import { createAction, props } from '@ngrx/store';

export const loadDetailsDimensionsData = createAction('[Details Dimensions] Load Data');
export const loadDetailsDimensionsDataSuccess = createAction('[Details Dimensions] Load Data Success', props<{ data: any }>());
export const loadDetailsDimensionsDataFailure = createAction('[Details Dimensions] Load Data Failure', props<{ error: any }>());
