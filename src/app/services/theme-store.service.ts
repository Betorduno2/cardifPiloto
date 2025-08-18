import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { changeTheme, loadTheme, resetTheme } from '../store/theme/theme.actions';
import { selectCurrentTheme, selectAvailableThemes, selectThemeLoading } from '../store/theme/theme.selectors';

@Injectable({
  providedIn: 'root'
})
export class ThemeStoreService {

  constructor(private store: Store<AppState>) {}

  // Selectores
  getCurrentTheme(): Observable<'theme-rojo' | 'theme-azul'> {
    return this.store.select(selectCurrentTheme);
  }

  getAvailableThemes(): Observable<string[]> {
    return this.store.select(selectAvailableThemes);
  }

  getThemeLoading(): Observable<boolean> {
    return this.store.select(selectThemeLoading);
  }

  // Acciones
  changeTheme(theme: 'theme-rojo' | 'theme-azul'): void {
    this.store.dispatch(changeTheme({ theme }));
  }

  loadTheme(): void {
    this.store.dispatch(loadTheme());
  }

  resetTheme(): void {
    this.store.dispatch(resetTheme());
  }
}
