import { createAction, props } from '@ngrx/store';

export const loadProtectionsData = createAction('[Protections] Load Data');
export const loadProtectionsDataSuccess = createAction('[Protections] Load Data Success', props<{ data: any }>());
export const loadProtectionsDataFailure = createAction('[Protections] Load Data Failure', props<{ error: any }>());
