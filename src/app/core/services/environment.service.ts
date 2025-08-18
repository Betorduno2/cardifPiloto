import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Environment } from '../../../environments/environment.interface';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  
  constructor() {}

  // Obtener toda la configuración del environment
  getEnvironment(): Environment {
    return environment as Environment;
  }

  // Verificar el tipo de ambiente
  isProduction(): boolean {
    return environment.production;
  }

  isDevelopment(): boolean {
    return environment.environmentName === 'development';
  }

  isStaging(): boolean {
    return environment.staging;
  }

  // Configuración de API
  getApiBaseUrl(): string {
    return environment.apiConfig.baseUrl;
  }

  getApiTimeout(): number {
    return environment.apiConfig.timeout;
  }

  isApiLoggingEnabled(): boolean {
    return environment.apiConfig.enableLogging;
  }

  // Features del ambiente
  isAnalyticsEnabled(): boolean {
    return environment.features.analytics;
  }

  isErrorReportingEnabled(): boolean {
    return environment.features.errorReporting;
  }

  isDebugModeEnabled(): boolean {
    return environment.features.debugMode;
  }

  shouldUseMockData(): boolean {
    return environment.features.mockData;
  }

  isProjectSwitchingAllowed(): boolean {
    return environment.projectConfig.allowProjectSwitching;
  }

  // Logging
  getLogLevel(): string {
    return environment.logging.level;
  }

  isConsoleLoggingEnabled(): boolean {
    return environment.logging.enableConsole;
  }

  isRemoteLoggingEnabled(): boolean {
    return environment.logging.enableRemote;
  }

  // URLs
  getAssetsUrl(): string {
    return environment.urls.assets;
  }

  getDocumentationUrl(): string {
    return environment.urls.documentation;
  }

  // Proyecto por defecto del ambiente
  getDefaultProject(): string {
    return environment.projectConfig.defaultProject;
  }

  getAvailableProjects(): string[] {
    return environment.projectConfig.availableProjects;
  }

  // Método de utilidad para logging condicional
  log(level: 'debug' | 'info' | 'warn' | 'error', message: string, ...args: any[]): void {
    if (!this.isConsoleLoggingEnabled()) return;

    const levels = ['debug', 'info', 'warn', 'error'];
    const currentLevelIndex = levels.indexOf(environment.logging.level);
    const messageLevelIndex = levels.indexOf(level);

    if (messageLevelIndex >= currentLevelIndex) {
      console[level](`[${environment.environmentName.toUpperCase()}]`, message, ...args);
    }
  }
}
