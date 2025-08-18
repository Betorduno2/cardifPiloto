// Environment para producción
export const environment = {
  production: true,
  staging: false,
  environmentName: 'production',
  
  // URLs de API para producción
  apiConfig: {
    baseUrl: 'https://api.cardif.com',
    timeout: 15000,
    enableLogging: false
  },
  
  // Configuración de features para producción
  features: {
    analytics: true,         // Habilitado en producción
    errorReporting: true,    // Habilitado en producción
    debugMode: false,        // Deshabilitado en producción
    mockData: false,         // Sin datos mock en producción
    hotReload: false
  },
  
  // Configuración de proyectos para producción
  projectConfig: {
    defaultProject: 'cardif-banco-azul',
    availableProjects: ['cardif-banco-rojo', 'cardif-banco-azul'],
    allowProjectSwitching: false  // No permitir cambio dinámico en producción
  },
  
  // Configuración de logging para producción
  logging: {
    level: 'error',
    enableConsole: false,
    enableRemote: true
  },
  
  // URLs para producción
  urls: {
    assets: 'https://cdn.cardif.com/assets',
    documentation: 'https://docs.cardif.com'
  }
};
