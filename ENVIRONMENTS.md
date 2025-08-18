# 🌍 Configuración de Environments - Cardif Piloto

## 📋 Descripción

Este proyecto utiliza un sistema de environments robusto que permite configurar diferentes comportamientos según el ambiente de ejecución (desarrollo, staging, producción).

## 🏗️ Estructura de Environments

```
src/environments/
├── environment.ts              # Desarrollo (por defecto)
├── environment.prod.ts         # Producción
├── environment.staging.ts      # Staging/Testing
└── environment.interface.ts    # Interfaz TypeScript
```

## 🔧 Configuraciones por Environment

### 🟢 **Development** (`environment.ts`)
- **Propósito**: Desarrollo local
- **Features**:
  - ✅ Debug mode habilitado
  - ✅ Datos mock disponibles
  - ✅ Cambio dinámico de proyectos
  - ✅ Logging detallado en consola
  - ❌ Analytics deshabilitados
  - ❌ Error reporting deshabilitado

### 🟡 **Staging** (`environment.staging.ts`)
- **Propósito**: Testing y QA
- **Features**:
  - ✅ Debug mode habilitado
  - ✅ Analytics habilitados
  - ✅ Cambio dinámico de proyectos
  - ✅ Error reporting habilitado
  - ✅ Logging remoto habilitado
  - ❌ Datos mock deshabilitados

### 🔴 **Production** (`environment.prod.ts`)
- **Propósito**: Ambiente productivo
- **Features**:
  - ✅ Analytics habilitados
  - ✅ Error reporting habilitado
  - ✅ Logging remoto habilitado
  - ❌ Debug mode deshabilitado
  - ❌ Cambio dinámico de proyectos
  - ❌ Logging en consola deshabilitado

## 🚀 Comandos de Ejecución

### **Desarrollo Local**
```bash
npm run start           # Por defecto (development)
npm run start:dev       # Explícitamente development
```

### **Staging/Testing**
```bash
npm run start:staging   # Ejecutar con configuración de staging
npm run build:staging   # Build para staging
```

### **Producción**
```bash
npm run start:prod      # Ejecutar con configuración de producción
npm run build:prod      # Build para producción
```

## 📝 Configuración Detallada

### **API Configuration**
```typescript
// Development
apiConfig: {
  baseUrl: 'http://localhost:3000/api',
  timeout: 30000,
  enableLogging: true
}

// Staging
apiConfig: {
  baseUrl: 'https://api-staging.cardif.com',
  timeout: 20000,
  enableLogging: true
}

// Production
apiConfig: {
  baseUrl: 'https://api.cardif.com',
  timeout: 15000,
  enableLogging: false
}
```

### **Features por Environment**
```typescript
// Development
features: {
  analytics: false,
  errorReporting: false,
  debugMode: true,
  mockData: true,
  hotReload: true
}

// Production
features: {
  analytics: true,
  errorReporting: true,
  debugMode: false,
  mockData: false,
  hotReload: false
}
```

### **Project Configuration**
```typescript
// Development - Permite cambio dinámico
projectConfig: {
  defaultProject: 'cardif-banco-azul',
  availableProjects: ['cardif-banco-rojo', 'cardif-banco-azul'],
  allowProjectSwitching: true
}

// Production - Proyecto fijo
projectConfig: {
  defaultProject: 'cardif-banco-azul',
  availableProjects: ['cardif-banco-rojo', 'cardif-banco-azul'],
  allowProjectSwitching: false
}
```

## 🔍 Uso del EnvironmentService

### **Inyección del Servicio**
```typescript
import { EnvironmentService } from './core/services/environment.service';

constructor(private environmentService: EnvironmentService) {}
```

### **Verificación de Environment**
```typescript
// Verificar ambiente actual
if (this.environmentService.isDevelopment()) {
  console.log('Estamos en desarrollo');
}

if (this.environmentService.isProduction()) {
  // Lógica específica de producción
}

if (this.environmentService.isStaging()) {
  // Lógica específica de staging
}
```

### **Configuración de Features**
```typescript
// Analytics condicionales
if (this.environmentService.isAnalyticsEnabled()) {
  // Inicializar Google Analytics, etc.
}

// Error reporting condicional
if (this.environmentService.isErrorReportingEnabled()) {
  // Configurar Sentry, etc.
}

// Datos mock condicionales
if (this.environmentService.shouldUseMockData()) {
  return this.getMockData();
} else {
  return this.http.get(this.environmentService.getApiBaseUrl() + '/data');
}
```

### **Logging Inteligente**
```typescript
// Logging automático basado en environment
this.environmentService.log('debug', 'Debug message');
this.environmentService.log('info', 'Info message');
this.environmentService.log('warn', 'Warning message');
this.environmentService.log('error', 'Error message');
```

### **URLs Dinámicas**
```typescript
// URLs que cambian por environment
const apiUrl = this.environmentService.getApiBaseUrl();
const assetsUrl = this.environmentService.getAssetsUrl();
const docsUrl = this.environmentService.getDocumentationUrl();
```

## 🔐 Configuración Avanzada

### **Variables Secretas**
Para producción, puedes usar variables de ambiente del sistema:

```typescript
// environment.prod.ts
export const environment = {
  // ...otras configuraciones
  apiConfig: {
    baseUrl: process.env['API_BASE_URL'] || 'https://api.cardif.com',
    apiKey: process.env['API_KEY'] || '',
    // ...
  }
};
```

### **Feature Flags Dinámicos**
```typescript
// Puedes incluso hacer feature flags remotos
async checkRemoteFeatures() {
  if (this.environmentService.isDevelopment()) return;
  
  const remoteConfig = await this.http.get('/api/feature-flags').toPromise();
  // Actualizar features dinámicamente
}
```

## 📱 Configuración de Build

### **Angular.json Configurado**
El archivo `angular.json` está configurado para:
- **Development**: Sin optimizaciones, source maps habilitados
- **Staging**: Optimizaciones parciales, source maps habilitados
- **Production**: Optimizaciones completas, compresión, etc.

### **File Replacements**
Angular automáticamente reemplaza el archivo environment según la configuración:
- `ng build --configuration production` → usa `environment.prod.ts`
- `ng build --configuration staging` → usa `environment.staging.ts`
- `ng build --configuration development` → usa `environment.ts`

## 🎯 Beneficios del Sistema

### ✅ **Flexibilidad**
- Comportamientos diferentes por ambiente
- Configuración centralizada
- Feature flags automáticos

### ✅ **Seguridad**
- No exponer configuraciones sensibles en desarrollo
- Control granular de features por ambiente

### ✅ **Mantenibilidad**
- Una sola base de código
- Configuración declarativa
- Fácil debugging por ambiente

### ✅ **Performance**
- Optimizaciones específicas por ambiente
- Lazy loading condicional
- Logging inteligente

---

## 🔄 Migración a Environments

Si ya tienes código que usa configuraciones hardcodeadas, puedes migrar así:

### **Antes:**
```typescript
const API_URL = 'http://localhost:3000/api';
if (isProd) {
  enableAnalytics();
}
```

### **Después:**
```typescript
const API_URL = this.environmentService.getApiBaseUrl();
if (this.environmentService.isAnalyticsEnabled()) {
  enableAnalytics();
}
```

Este sistema te permite tener **control total** sobre el comportamiento de tu aplicación en diferentes ambientes de manera **elegante y mantenible** 🚀
