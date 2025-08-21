import { ProjectConfig } from '../../interfaces/project-config.interface';

export const CARDIF_BANCO_ROJO: ProjectConfig = {
  id: 'cardif-banco-rojo',
  name: 'Cardif Banco Rojo',
  theme: {
    primary: '#d32f2f',
    secondary: '#ff5722',
    accent: '#ffc107',
    background: '#ffffff',
    text: '#333333',
    button: {
      background: '#d32f2f',
      text: '#ffffff',
      hover: '#b71c1c'
    },
    fonts: {
      primary: 'Roboto, sans-serif',
      secondary: 'Arial, sans-serif',
      sizes: {
        small: '14px',
        medium: '16px',
        large: '20px',
        xlarge: '24px'
      }
    }
  },
  flow: [
    {
      stepId: 'rojo-step1',
      path: 'componentTwo',
      component: 'DimensionsComponent',
      config: {
        title: 'Bienvenido al Banco Rojo',
        description: 'Iniciemos tu proceso de solicitud',
        buttonText: 'Continuar'
      }
    },
    {
      stepId: 'rojo-step2',
      path: 'componentThree',
      component: 'DetailsDimensionsComponent',
      config: {
        title: 'Datos Personales',
        description: 'Completa tu información personal',
        buttonText: 'Siguiente'
      }
    },
    {
      stepId: 'rojo-step3',
      path: 'componentFour',
      component: 'ProtectionsComponent',
      config: {
        title: 'Confirmación',
        description: 'Revisa y confirma tu solicitud',
        buttonText: 'Finalizar'
      }
    }
  ],
  assets: {
    logo: '/assets/logos/banco-rojo-logo.png',
    favicon: '/assets/favicons/banco-rojo.ico',
    images: {
      hero: '/assets/images/banco-rojo-hero.jpg',
      background: '/assets/images/banco-rojo-bg.jpg'
    }
  },
  features: {
    analytics: true,
    multiLanguage: false,
    darkMode: false
  },
  api: {
    baseUrl: 'https://api.bancorojo.com',
    endpoints: {
      auth: '/auth',
      profile: '/profile',
      applications: '/applications'
    }
  }
};
