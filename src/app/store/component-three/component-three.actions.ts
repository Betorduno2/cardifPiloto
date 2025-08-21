import { createAction, props } from '@ngrx/store';

export const loadComponentThreeData = createAction('[Component Three] Load Data');
export const loadComponentThreeDataSuccess = createAction('[Component Three] Load Data Success', props<{ data: any }>());
export const loadComponentThreeDataFailure = createAction('[Component Three] Load Data Failure', props<{ error: any }>());
