import { createReducer, on } from '@ngrx/store';
import { ThemeState, initialThemeState } from './theme.state';
import {
  changeTheme,
  loadTheme,
  loadThemeSuccess,
  resetTheme
} from './theme.actions';

export const themeReducer = createReducer(
  initialThemeState,
  
  on(changeTheme, (state, { theme }) => ({
    ...state,
    currentTheme: theme
  })),
  
  on(loadTheme, (state) => ({
    ...state,
    isLoading: true
  })),
  
  on(loadThemeSuccess, (state, { theme }) => ({
    ...state,
    currentTheme: theme,
    isLoading: false
  })),
  
  on(resetTheme, (state) => ({
    ...state,
    currentTheme: 'theme-azul' as 'theme-rojo' | 'theme-azul'
  }))
);
