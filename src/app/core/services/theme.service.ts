import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { ThemeConfig } from '../interfaces/project-config.interface';
import { ThemeStoreService } from '../../services/theme-store.service';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_PREFIX = 'theme-';

  constructor(
    private configService: ConfigService,
    private themeStoreService: ThemeStoreService
  ) {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    // Combinar el tema del store con la configuración del proyecto
    combineLatest([
      this.configService.currentProject$,
      this.themeStoreService.getCurrentTheme()
    ]).subscribe(([project, reduxTheme]) => {
      if (project) {
        this.applyTheme(project.theme);
      }
      // También aplicar la clase del tema desde Redux
      this.applyReduxTheme(reduxTheme);
    });
  }

  private applyReduxTheme(theme: 'theme-rojo' | 'theme-azul'): void {
    // Remover temas de Redux anteriores
    const body = document.body;
    body.classList.remove('theme-rojo', 'theme-azul');
    // Aplicar nuevo tema
    body.classList.add(theme);
  }

  // Método para cambiar tema usando Redux
  changeTheme(theme: 'theme-rojo' | 'theme-azul'): void {
    this.themeStoreService.changeTheme(theme);
  }

  // Observable del tema actual desde Redux
  getCurrentThemeFromStore(): Observable<'theme-rojo' | 'theme-azul'> {
    return this.themeStoreService.getCurrentTheme();
  }

  applyTheme(themeConfig: ThemeConfig): void {
    this.removeExistingThemes();
    this.createCSSVariables(themeConfig);
    this.addThemeClass(themeConfig);
  }

  private removeExistingThemes(): void {
    const body = document.body;
    const existingThemeClasses = Array.from(body.classList)
      .filter(className => className.startsWith(this.THEME_PREFIX));
    
    existingThemeClasses.forEach(className => {
      body.classList.remove(className);
    });
  }

  private createCSSVariables(themeConfig: ThemeConfig): void {
    const root = document.documentElement;
    
    // Colores principales
    root.style.setProperty('--color-primary', themeConfig.primary);
    root.style.setProperty('--color-secondary', themeConfig.secondary);
    root.style.setProperty('--color-accent', themeConfig.accent);
    root.style.setProperty('--color-background', themeConfig.background);
    root.style.setProperty('--color-text', themeConfig.text);
    
    // Botones
    root.style.setProperty('--button-background', themeConfig.button.background);
    root.style.setProperty('--button-text', themeConfig.button.text);
    root.style.setProperty('--button-hover', themeConfig.button.hover);
    
    // Fuentes
    root.style.setProperty('--font-primary', themeConfig.fonts.primary);
    root.style.setProperty('--font-secondary', themeConfig.fonts.secondary);
    root.style.setProperty('--font-size-small', themeConfig.fonts.sizes.small);
    root.style.setProperty('--font-size-medium', themeConfig.fonts.sizes.medium);
    root.style.setProperty('--font-size-large', themeConfig.fonts.sizes.large);
    root.style.setProperty('--font-size-xlarge', themeConfig.fonts.sizes.xlarge);
  }

  private addThemeClass(themeConfig: ThemeConfig): void {
    const project = this.configService.getCurrentProject();
    if (project) {
      document.body.classList.add(`${this.THEME_PREFIX}${project.id}`);
    }
  }

  getCurrentTheme(): ThemeConfig | null {
    return this.configService.getThemeConfig();
  }
}
