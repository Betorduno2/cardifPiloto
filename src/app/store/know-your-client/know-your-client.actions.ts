import { createAction, props } from '@ngrx/store';

export const loadKnowYourClientData = createAction('[Know Your Client] Load Data');
export const loadKnowYourClientDataSuccess = createAction('[Know Your Client] Load Data Success', props<{ data: any }>());
export const loadKnowYourClientDataFailure = createAction('[Know Your Client] Load Data Failure', props<{ error: any }>());
