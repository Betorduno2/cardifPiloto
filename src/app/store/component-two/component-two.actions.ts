import { createAction, props } from '@ngrx/store';

export const loadComponentTwoData = createAction('[Component Two] Load Data');
export const loadComponentTwoDataSuccess = createAction('[Component Two] Load Data Success', props<{ data: any }>());
export const loadComponentTwoDataFailure = createAction('[Component Two] Load Data Failure', props<{ error: any }>());
