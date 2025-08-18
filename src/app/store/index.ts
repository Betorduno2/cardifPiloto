import { ThemeState } from './theme/theme.state';

export interface AppState {
  theme: ThemeState;
}

export * from './theme/theme.state';
export * from './theme/theme.actions';
export * from './theme/theme.reducer';
export * from './theme/theme.selectors';
