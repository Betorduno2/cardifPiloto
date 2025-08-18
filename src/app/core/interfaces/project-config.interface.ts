export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  button: {
    background: string;
    text: string;
    hover: string;
  };
  fonts: {
    primary: string;
    secondary: string;
    sizes: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
  };
}

export interface FlowStep {
  stepId: string;
  path: string;
  component: string;
  config?: {
    title?: string;
    description?: string;
    buttonText?: string;
    customStyles?: Record<string, string>;
  };
}

export interface ProjectConfig {
  id: string;
  name: string;
  theme: ThemeConfig;
  flow: FlowStep[];
  assets: {
    logo?: string;
    favicon?: string;
    images?: Record<string, string>;
  };
  features: {
    analytics?: boolean;
    multiLanguage?: boolean;
    darkMode?: boolean;
  };
  api: {
    baseUrl: string;
    endpoints: Record<string, string>;
  };
}

export interface AppConfig {
  projects: Record<string, ProjectConfig>;
  currentProject: string;
  environment: 'development' | 'production' | 'staging';
}
