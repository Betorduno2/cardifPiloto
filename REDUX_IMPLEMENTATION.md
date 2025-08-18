# Implementación de Redux (NgRx) en PilotoCardif

## ✅ Lo que hemos implementado

### 1. **Instalación y Configuración**
```bash
npm install @ngrx/store@16 @ngrx/effects@16 @ngrx/store-devtools@16
```

### 2. **Estructura del Store**
```
src/app/store/
├── index.ts                    # Archivo principal del store
└── theme/
    ├── theme.state.ts          # Define el estado del tema
    ├── theme.actions.ts        # Acciones para cambiar tema
    ├── theme.reducer.ts        # Lógica de cambios de estado
    └── theme.selectors.ts      # Selectores para acceder al estado
```

### 3. **Configuración en AppModule**
- ✅ StoreModule.forRoot() configurado
- ✅ StoreDevtoolsModule para debugging
- ✅ Reducer de tema registrado

### 4. **Servicios Creados**
- ✅ `ThemeStoreService` - Interfaz para interactuar con el store
- ✅ `ThemeService` actualizado para usar Redux

### 5. **Componente Actualizado**
- ✅ `ComponentOneComponent` conectado al store
- ✅ Botón para cambiar tema
- ✅ Observables reactivos (`currentTheme$`)

## 🎯 Funcionalidades Disponibles

### **Cambio de Tema Reactivo**
```typescript
// En cualquier componente:
constructor(private themeStoreService: ThemeStoreService) {}

// Cambiar tema
this.themeStoreService.changeTheme('theme-rojo');

// Escuchar cambios
this.themeStoreService.getCurrentTheme().subscribe(theme => {
  console.log('Nuevo tema:', theme);
});
```

### **Estado Centralizado**
```typescript
interface AppState {
  theme: {
    currentTheme: 'theme-rojo' | 'theme-azul';
    availableThemes: string[];
    isLoading: boolean;
  }
}
```

### **Acciones Disponibles**
- `changeTheme({ theme })` - Cambiar tema inmediatamente
- `loadTheme()` - Cargar tema inicial
- `resetTheme()` - Volver al tema por defecto

## 🔧 Cómo usar Redux en otros componentes

### **1. Conectar componente al store:**
```typescript
import { ThemeStoreService } from '../../services/theme-store.service';

export class MiComponente {
  currentTheme$ = this.themeStoreService.getCurrentTheme();
  
  constructor(private themeStoreService: ThemeStoreService) {}
  
  cambiarTema() {
    this.themeStoreService.changeTheme('theme-azul');
  }
}
```

### **2. En el template:**
```html
<p>Tema actual: {{ currentTheme$ | async }}</p>
<button (click)="cambiarTema()">Cambiar Tema</button>
```

## 🐛 Debugging con Redux DevTools

1. **Instalar extensión de navegador**: Redux DevTools
2. **Abrir en navegador**: F12 → pestaña "Redux"
3. **Ver acciones**: Cada cambio de tema aparecerá como acción
4. **Time Travel**: Puedes retroceder a estados anteriores

## 📈 Próximos pasos sugeridos

### **Fase 2: Expandir el Store**
```typescript
interface AppState {
  theme: ThemeState;
  user: UserState;           // ← Agregar estado de usuario
  navigation: NavigationState; // ← Agregar estado de navegación
}
```

### **Fase 3: Conectar más componentes**
- ComponentTwo, ComponentThree, ComponentFour
- Compartir datos entre componentes usando el store

### **Fase 4: Persistencia**
```typescript
// Guardar estado en localStorage automáticamente
npm install @ngrx/store-devtools
```

### **Fase 5: Effects (para APIs)**
```typescript
// Para llamadas a APIs asíncronas
npm install @ngrx/effects
```

## 🎉 Beneficios Ya Obtenidos

1. ✅ **Estado Centralizado**: El tema se gestiona en un solo lugar
2. ✅ **Reactivo**: Cambios automáticos en toda la app
3. ✅ **Debugging**: Herramientas avanzadas de desarrollo
4. ✅ **Predecible**: Cada cambio pasa por el reducer
5. ✅ **Escalable**: Fácil agregar más estado

## 🚀 Cómo probar

1. Abre http://localhost:4200
2. Ve a ComponentOne
3. Usa el botón "Cambiar Tema"
4. Abre Redux DevTools para ver las acciones
5. El tema cambia en toda la aplicación

¡Redux está funcionando! 🎊
