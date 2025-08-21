# Manual de Funcionamiento del Proyecto

## 1. Estructura General

El proyecto está organizado siguiendo buenas prácticas de Angular y Redux. Las carpetas principales son:

- `src/app/core`: Componentes, servicios y configuraciones centrales.
- `src/app/features`: Módulos de funcionalidades específicas (por ejemplo, proyectos/bancos).
- `src/app/store`: Implementación de Redux (acciones, reducers, selectors, estados).
- `src/app/services`: Servicios generales.
- `src/app/config`: Configuraciones específicas de flujos.
- `src/assets`: Recursos estáticos.
- `src/environments`: Configuraciones de entorno.

---

## 2. Agregar un Nuevo Proyecto

### Paso 1: Crear el Módulo del Proyecto

1. Ve a `src/app/features/`.
2. Crea una carpeta para el nuevo proyecto, por ejemplo: `cardif-banco-verde/`.
3. Dentro, crea el archivo del módulo: `cardif-banco-verde.module.ts`.

Ejemplo básico de módulo:

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    // Componentes del proyecto
  ],
  imports: [
    CommonModule,
    // Otros módulos necesarios
  ]
})
export class CardifBancoVerdeModule { }
```

### Paso 2: Configuración del Proyecto

1. Ve a `src/app/core/config/projects/`.
2. Crea un archivo de configuración, por ejemplo: `cardif-banco-verde.config.ts`.
3. Implementa la interfaz `ProjectConfig` y define los parámetros del proyecto (nombre, colores, APIs, etc.).

Ejemplo:

```typescript
import { ProjectConfig } from '../../interfaces/project-config.interface';

export const CardifBancoVerdeConfig: ProjectConfig = {
  name: 'Banco Verde',
  theme: {
    primary: '#00FF00',
    secondary: '#008000'
  },
  apiEndpoints: {
    login: '/api/verde/login',
    data: '/api/verde/data'
  }
  // Otros parámetros
};
```

### Paso 3: Registrar el Proyecto

1. Ve a `src/app/core/config/app.config.ts`.
2. Importa la configuración y agrégala al listado de proyectos.

```typescript
import { CardifBancoVerdeConfig } from './projects/cardif-banco-verde.config';

export const PROJECTS = [
  // ...otros proyectos
  CardifBancoVerdeConfig
];
```

---

## 3. Setear Estilos para un Proyecto

### Paso 1: Definir Temas

1. En la configuración del proyecto (`cardif-banco-verde.config.ts`), define los colores y estilos en la propiedad `theme`.

### Paso 2: Usar el Servicio de Temas

1. El servicio `theme.service.ts` en `src/app/core/services/` gestiona el cambio de temas.
2. Al iniciar el proyecto, llama al método para aplicar el tema correspondiente.

Ejemplo:

```typescript
// En el componente principal del proyecto
constructor(private themeService: ThemeService) {
  this.themeService.setTheme(projectConfig.theme);
}
```

### Paso 3: Aplicar Estilos en SCSS

1. Usa variables SCSS para los colores definidos.
2. En `styles.scss` o en los archivos SCSS de componentes, utiliza las variables para mantener consistencia.

---

## 4. Agregar Configuraciones de APIs

### Paso 1: Definir Endpoints en la Configuración

1. En el archivo de configuración del proyecto (`cardif-banco-verde.config.ts`), agrega los endpoints necesarios bajo la propiedad `apiEndpoints`.

### Paso 2: Consumir APIs desde Servicios

1. Ve a `src/app/services/flow.service.ts` o crea un nuevo servicio.
2. Inyecta la configuración del proyecto y utiliza los endpoints para realizar peticiones HTTP.

Ejemplo:

```typescript
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectConfig } from '../core/interfaces/project-config.interface';

@Injectable()
export class FlowService {
  constructor(private http: HttpClient, private config: ProjectConfig) {}

  getData() {
    return this.http.get(this.config.apiEndpoints.data);
  }
}
```

---

## 5. Implementación de Redux

- Las acciones se definen en `src/app/store/theme/theme.actions.ts`.
- Los reducers en `src/app/store/theme/theme.reducer.ts`.
- Los selectors en `src/app/store/theme/theme.selectors.ts`.
- El estado en `src/app/store/theme/theme.state.ts`.

Para agregar una nueva funcionalidad al store:

1. Define las acciones.
2. Implementa el reducer.
3. Crea los selectors.
4. Actualiza el estado si es necesario.

---

## 6. Lazy Loading

Para cargar módulos de forma perezosa:

1. Define rutas en el archivo de routing correspondiente (`app-routing.module.ts` o `flow-components-routing.module.ts`).
2. Usa la propiedad `loadChildren` para cargar el módulo del proyecto.

Ejemplo:

```typescript
{
  path: 'banco-verde',
  loadChildren: () => import('./features/cardif-banco-verde/cardif-banco-verde.module').then(m => m.CardifBancoVerdeModule)
}
```

---

## 7. Configuración de Entornos

- Los archivos en `src/environments/` definen variables para cada entorno (`environment.ts`, `environment.prod.ts`, etc.).
- Para agregar una variable, edítala en el archivo correspondiente y accede a ella desde el código usando `environment`.

---

## 8. Buenas Prácticas

- Mantén la modularidad: cada proyecto y funcionalidad en su propio módulo.
- Centraliza configuraciones en archivos específicos.
- Usa servicios para lógica de negocio y acceso a APIs.
- Aplica Redux para el manejo de estado global.
- Utiliza lazy loading para mejorar el rendimiento.

---
