import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { ThemeConfig } from '../interfaces/project-config.interface';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_PREFIX = 'theme-';

  constructor(private configService: ConfigService) {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    this.configService.currentProject$.subscribe((project: any) => {
      if (project) {
        this.applyTheme(project.theme);
      }
    });
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
