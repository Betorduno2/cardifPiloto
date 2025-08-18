// Environment para desarrollo
export const environment = {
  production: false,
  staging: false,
  environmentName: 'development',
  
  // URLs de API por ambiente
  apiConfig: {
    baseUrl: 'http://localhost:3000/api',
    timeout: 30000,
    enableLogging: true
  },
  
  // Configuración de features por ambiente
  features: {
    analytics: false,        // Deshabilitado en desarrollo
    errorReporting: false,   // Deshabilitado en desarrollo
    debugMode: true,         // Habilitado en desarrollo
    mockData: true,          // Usar datos mock en desarrollo
    hotReload: true
  },
  
  // Configuración de proyectos por ambiente
  projectConfig: {
    defaultProject: 'cardif-banco-azul',
    availableProjects: ['cardif-banco-rojo', 'cardif-banco-azul'],
    allowProjectSwitching: true  // Permitir cambio dinámico en desarrollo
  },
  
  // Configuración de logging
  logging: {
    level: 'debug',
    enableConsole: true,
    enableRemote: false
  },
  
  // URLs específicas para desarrollo
  urls: {
    assets: '/assets',
    documentation: 'http://localhost:4200/docs'
  }
};
