import { createAction, props } from '@ngrx/store';

export const changeTheme = createAction(
  '[Theme] Change Theme',
  props<{ theme: 'theme-rojo' | 'theme-azul' }>()
);

export const loadTheme = createAction('[Theme] Load Theme');

export const loadThemeSuccess = createAction(
  '[Theme] Load Theme Success',
  props<{ theme: 'theme-rojo' | 'theme-azul' }>()
);

export const resetTheme = createAction('[Theme] Reset Theme');
