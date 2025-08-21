import { createAction, props } from '@ngrx/store';

export const loadComponentFourData = createAction('[Component Four] Load Data');
export const loadComponentFourDataSuccess = createAction('[Component Four] Load Data Success', props<{ data: any }>());
export const loadComponentFourDataFailure = createAction('[Component Four] Load Data Failure', props<{ error: any }>());
