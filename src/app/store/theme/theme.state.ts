export interface ThemeState {
  currentTheme: 'theme-rojo' | 'theme-azul';
  availableThemes: string[];
  isLoading: boolean;
}

export const initialThemeState: ThemeState = {
  currentTheme: 'theme-azul' as 'theme-rojo' | 'theme-azul',
  availableThemes: ['theme-rojo', 'theme-azul'],
  isLoading: false
};
