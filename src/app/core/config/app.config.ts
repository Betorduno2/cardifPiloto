import { AppConfig } from '../interfaces/project-config.interface';
import { CARDIF_BANCO_ROJO } from './projects/cardif-banco-rojo.config';
import { CARDIF_BANCO_AZUL } from './projects/cardif-banco-azul.config';
import { environment } from '../../../environments/environment';

export const APP_CONFIG: AppConfig = {
  projects: {
    'cardif-banco-rojo': CARDIF_BANCO_ROJO,
    'cardif-banco-azul': CARDIF_BANCO_AZUL
  },
  currentProject: environment.projectConfig.defaultProject, // Usa environment
  environment: environment.environmentName as 'development' | 'production' | 'staging'
};

// Función para obtener configuración de proyecto específico
export function getProjectConfig(projectId: string) {
  return APP_CONFIG.projects[projectId];
}

// Función para obtener la configuración del proyecto actual
export function getCurrentProjectConfig() {
  return APP_CONFIG.projects[APP_CONFIG.currentProject];
}

// Función para obtener configuración del environment actual
export function getEnvironmentConfig() {
  return environment;
}

// Función para verificar si estamos en desarrollo
export function isDevelopment(): boolean {
  return environment.environmentName === 'development';
}

// Función para verificar si estamos en producción
export function isProduction(): boolean {
  return environment.production;
}

// Función para verificar si estamos en staging
export function isStaging(): boolean {
  return environment.staging;
}
