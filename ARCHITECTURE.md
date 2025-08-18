# 🏦 Cardif Piloto - Arquitectura Mejorada

## 📋 Descripción

Este proyecto ha sido refactorizado para ser completamente configurable y escalable, permitiendo manejar múltiples proyectos/bancos con diferentes temas, flujos y configuraciones desde archivos de configuración centralizados.

## 🏗️ Nueva Arquitectura

### 📁 Estructura de Carpetas

```
src/app/
├── core/                           # Módulo central
│   ├── interfaces/                 # Interfaces TypeScript
│   │   └── project-config.interface.ts
│   ├── config/                     # Configuraciones
│   │   ├── app.config.ts          # Configuración principal
│   │   └── projects/              # Configuraciones por proyecto
│   │       ├── cardif-banco-rojo.config.ts
│   │       └── cardif-banco-azul.config.ts
│   ├── services/                   # Servicios centrales
│   │   ├── config.service.ts      # Manejo de configuraciones
│   │   └── theme.service.ts       # Manejo de temas
│   └── components/                 # Componentes base
│       └── base-flow.component.ts # Componente base abstracto
├── services/                       # Servicios específicos
│   └── flow.service.ts            # Servicio de flujo mejorado
└── components/                     # Componentes de la aplicación
```

## 🔧 Configuración de Proyectos

### Agregar un Nuevo Proyecto

1. **Crear configuración del proyecto:**
```typescript
// src/app/core/config/projects/nuevo-banco.config.ts
export const NUEVO_BANCO: ProjectConfig = {
  id: 'nuevo-banco',
  name: 'Nuevo Banco',
  theme: {
    primary: '#28a745',
    secondary: '#6c757d',
    // ... más configuraciones de tema
  },
  flow: [
    {
      stepId: 'nuevo-step1',
      path: 'component-one',
      component: 'ComponentOneComponent',
      config: {
        title: 'Bienvenido',
        description: 'Descripción personalizada',
        buttonText: 'Continuar'
      }
    }
    // ... más pasos
  ],
  // ... más configuraciones
};
```

2. **Registrar en configuración principal:**
```typescript
// src/app/core/config/app.config.ts
import { NUEVO_BANCO } from './projects/nuevo-banco.config';

export const APP_CONFIG: AppConfig = {
  projects: {
    'cardif-banco-rojo': CARDIF_BANCO_ROJO,
    'cardif-banco-azul': CARDIF_BANCO_AZUL,
    'nuevo-banco': NUEVO_BANCO  // ← Agregar aquí
  },
  currentProject: 'nuevo-banco', // Proyecto por defecto
  environment: 'development'
};
```

### Cambiar Proyecto Dinámicamente

```typescript
// En cualquier componente o servicio
constructor(private flowService: FlowService) {}

cambiarProyecto() {
  this.flowService.setCurrentProject('cardif-banco-rojo');
}
```

## 🎨 Sistema de Temas

### CSS Variables Dinámicas

El sistema utiliza CSS variables que se actualizan automáticamente:

```scss
.mi-elemento {
  background-color: var(--color-primary);
  color: var(--color-text);
  font-family: var(--font-primary);
}
```

### Configuración de Tema

```typescript
theme: {
  primary: '#d32f2f',        // Color primario
  secondary: '#ff5722',      // Color secundario
  accent: '#ffc107',         // Color de acento
  background: '#ffffff',     // Color de fondo
  text: '#333333',          // Color de texto
  button: {
    background: '#d32f2f',   // Fondo del botón
    text: '#ffffff',         // Texto del botón
    hover: '#b71c1c'         // Color hover
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
}
```

## 🔄 Flujos Configurables

### Definir Pasos del Flujo

```typescript
flow: [
  {
    stepId: 'paso1',
    path: 'ruta-componente',
    component: 'NombreComponente',
    config: {
      title: 'Título del paso',
      description: 'Descripción del paso',
      buttonText: 'Texto del botón',
      customStyles: {
        // Estilos personalizados opcionales
      }
    }
  }
]
```

### Navegación Automática

```typescript
// El servicio maneja automáticamente la navegación
this.flowService.goToNextStep('paso-actual');
this.flowService.goToPreviousStep('paso-actual');
```

## 🧩 Componentes Mejorados

### Usar Componente Base

```typescript
export class MiComponente extends BaseFlowComponent {
  protected stepId = 'mi-step-id';

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService
  ) {
    super(flowService, configService, themeService);
  }

  protected onValidateStep(): boolean {
    // Lógica de validación personalizada
    return this.isValid;
  }

  // Métodos específicos del componente
}
```

### Acceso a Configuración

```typescript
// En cualquier componente que extienda BaseFlowComponent
getTitle()          // Título del paso
getDescription()    // Descripción del paso
getButtonText()     // Texto del botón
currentProject      // Configuración del proyecto actual
stepConfig          // Configuración específica del paso
progress           // Progreso del flujo (0-100)
```

## 🚀 Funcionalidades Avanzadas

### 1. **Analytics Condicional**
```typescript
if (this.configService.isFeatureEnabled('analytics')) {
  // Implementar tracking
}
```

### 2. **Multi-idioma**
```typescript
if (this.configService.isFeatureEnabled('multiLanguage')) {
  // Cargar traducciones
}
```

### 3. **Modo Oscuro**
```typescript
if (this.configService.isFeatureEnabled('darkMode')) {
  // Implementar tema oscuro
}
```

### 4. **API Configurables**
```typescript
const apiConfig = this.configService.getApiConfig();
const endpoint = `${apiConfig.baseUrl}${apiConfig.endpoints.profile}`;
```

## 📱 Responsividad

El sistema incluye clases CSS responsivas:

```html
<div class="container">
  <div class="card">
    <h1 class="mb-lg">{{ getTitle() }}</h1>
    <div class="flow-navigation">
      <button class="btn btn-primary">{{ getButtonText() }}</button>
    </div>
  </div>
</div>
```

## ⚡ Beneficios de la Nueva Arquitectura

### ✅ **Escalabilidad**
- Fácil agregar nuevos proyectos sin tocar código existente
- Configuración centralizada
- Reutilización de componentes

### ✅ **Mantenibilidad**
- Separación clara de responsabilidades
- Tipado fuerte con TypeScript
- Patrón de componentes base

### ✅ **Flexibilidad**
- Temas completamente configurables
- Flujos dinámicos
- Features opcionales

### ✅ **Experiencia de Usuario**
- Navegación fluida
- Progreso visual
- Animaciones suaves
- Diseño responsivo

## 🔧 Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm start

# Build
npm run build

# Tests
npm test
```

## 📝 Próximos Pasos

1. **Implementar los demás componentes** siguiendo el patrón del ComponentOne
2. **Agregar validaciones avanzadas** en cada paso
3. **Implementar persistencia** de datos del flujo
4. **Agregar tests unitarios** para los nuevos servicios
5. **Documentar APIs** para integraciones externas

---

Esta nueva arquitectura transforma el proyecto en una **plataforma escalable** capaz de manejar múltiples proyectos con diferentes configuraciones, temas y flujos de manera eficiente y mantenible.
