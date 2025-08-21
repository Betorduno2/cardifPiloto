import { createAction, props } from '@ngrx/store';

export const loadComponentOneData = createAction('[Component One] Load Data');
export const loadComponentOneDataSuccess = createAction('[Component One] Load Data Success', props<{ data: any }>());
export const loadComponentOneDataFailure = createAction('[Component One] Load Data Failure', props<{ error: any }>());
