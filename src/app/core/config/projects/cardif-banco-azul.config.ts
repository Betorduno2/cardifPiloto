import { ProjectConfig } from '../../interfaces/project-config.interface';

export const CARDIF_BANCO_AZUL: ProjectConfig = {
  id: 'cardif-banco-azul',
  name: 'Cardif Banco Azul',
  theme: {
    primary: '#1565c0',
    secondary: '#2196f3',
    accent: '#00bcd4',
    background: '#ffffff',
    text: '#333333',
    button: {
      background: '#1565c0',
      text: '#ffffff',
      hover: '#0d47a1'
    },
    fonts: {
      primary: 'Open Sans, sans-serif',
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
      stepId: 'azul-step1',
      path: 'componentOne',
      component: 'ComponentOneComponent',
      config: {
        title: 'Bienvenido al Banco Azul',
        description: 'Tu partner financiero de confianza',
        buttonText: 'Empezar'
      }
    },
    {
      stepId: 'azul-step2',
      path: 'componentTwo',
      component: 'ComponentTwoComponent',
      config: {
        title: 'Información Básica',
        description: 'Completa tus datos básicos',
        buttonText: 'Continuar'
      }
    },
    {
      stepId: 'azul-step3',
      path: 'componentThree',
      component: 'ComponentThreeComponent',
      config: {
        title: 'Verificación',
        description: 'Verifica tu identidad',
        buttonText: 'Verificar'
      }
    },
    {
      stepId: 'azul-step4',
      path: 'componentFour',
      component: 'ComponentFourComponent',
      config: {
        title: 'Finalización',
        description: 'Finaliza tu proceso',
        buttonText: 'Completar'
      }
    }
  ],
  assets: {
    logo: '/assets/logos/banco-azul-logo.png',
    favicon: '/assets/favicons/banco-azul.ico',
    images: {
      hero: '/assets/images/banco-azul-hero.jpg',
      background: '/assets/images/banco-azul-bg.jpg'
    }
  },
  features: {
    analytics: true,
    multiLanguage: true,
    darkMode: true
  },
  api: {
    baseUrl: 'https://api.bancoazul.com',
    endpoints: {
      auth: '/auth',
      profile: '/profile',
      applications: '/applications',
      verification: '/verification'
    }
  }
};
