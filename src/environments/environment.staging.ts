// Environment para staging/testing
export const environment = {
  production: false,
  staging: true,
  environmentName: 'staging',
  
  // URLs de API para staging
  apiConfig: {
    baseUrl: 'https://api-staging.cardif.com',
    timeout: 20000,
    enableLogging: true
  },
  
  // Configuración de features para staging
  features: {
    analytics: true,         // Habilitado para testing
    errorReporting: true,    // Habilitado para testing
    debugMode: true,         // Habilitado para debugging
    mockData: false,         // Usar APIs reales pero de staging
    hotReload: false
  },
  
  // Configuración de proyectos para staging
  projectConfig: {
    defaultProject: 'cardif-banco-azul',
    availableProjects: ['cardif-banco-rojo', 'cardif-banco-azul'],
    allowProjectSwitching: true  // Permitir cambio para testing
  },
  
  // Configuración de logging para staging
  logging: {
    level: 'info',
    enableConsole: true,
    enableRemote: true
  },
  
  // URLs para staging
  urls: {
    assets: 'https://cdn-staging.cardif.com/assets',
    documentation: 'https://docs-staging.cardif.com'
  }
};
