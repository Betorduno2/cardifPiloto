// Interfaz para tipado fuerte de los environments
export interface Environment {
  production: boolean;
  staging: boolean;
  environmentName: 'development' | 'production' | 'staging';
  
  apiConfig: {
    baseUrl: string;
    timeout: number;
    enableLogging: boolean;
  };
  
  features: {
    analytics: boolean;
    errorReporting: boolean;
    debugMode: boolean;
    mockData: boolean;
    hotReload: boolean;
  };
  
  projectConfig: {
    defaultProject: string;
    availableProjects: string[];
    allowProjectSwitching: boolean;
  };
  
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    enableConsole: boolean;
    enableRemote: boolean;
  };
  
  urls: {
    assets: string;
    documentation: string;
  };
}
