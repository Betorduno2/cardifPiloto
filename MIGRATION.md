# 🔄 Guía de Migración - Cardif Piloto

## 📋 Resumen de Cambios

Esta guía detalla cómo migrar del código actual al nuevo sistema configurable y escalable.

## ⚠️ Cambios Importantes

### ❌ **Código Eliminado/Deprecado**

1. **Archivo `bank-flows.ts`** → Reemplazado por configuraciones de proyecto individuales
2. **Lógica hardcodeada** en `FlowService` → Ahora usa configuraciones dinámicas
3. **Temas CSS fijos** → Reemplazados por CSS variables dinámicas
4. **Navegación manual** en componentes → Ahora automática via `BaseFlowComponent`

### ✅ **Nuevo Sistema**

| Antes | Después |
|-------|---------|
| `BANK_FLOWS['rojo']` | `CARDIF_BANCO_ROJO.flow` |
| `theme-rojo` CSS class | CSS variables dinámicas |
| Componentes independientes | `BaseFlowComponent` abstracto |
| Configuración dispersa | `ProjectConfig` centralizada |

## 🔧 Pasos de Migración

### 1. **Actualizar Componentes Existentes**

#### Antes:
```typescript
export class ComponentTwoComponent {
  constructor(public flowService: FlowService) {}
  
  goToNextStep() {
    if (this.flowService.currentBank === 'rojo') {
      this.flowService.goToNextStep('rojo-step1');
    } else {
      this.flowService.goToNextStep('azul-step2');
    }
  }
}
```

#### Después:
```typescript
export class ComponentTwoComponent extends BaseFlowComponent {
  protected stepId = 'rojo-step1'; // o 'azul-step2' según contexto
  
  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService
  ) {
    super(flowService, configService, themeService);
  }
  
  protected onValidateStep(): boolean {
    // Lógica de validación
    return true;
  }
}
```

### 2. **Actualizar Templates HTML**

#### Antes:
```html
<h2>Componente 2 - Compartido</h2>
<p>El tema es <span class="text-color">{{ flowService.currentBank }}</span></p>
<button class="app-button" (click)="goToNextStep()">Siguiente</button>
```

#### Después:
```html
<div class="container fade-in">
  <div class="progress-bar">
    <div class="progress-fill" [style.width.%]="progress"></div>
  </div>
  
  <div class="card">
    <h1>{{ getTitle() }}</h1>
    <p class="mb-lg">{{ getDescription() }}</p>
    
    <div *ngIf="currentProject" class="mb-lg">
      <p class="text-primary">Proyecto: {{ currentProject.name }}</p>
    </div>
  </div>
  
  <div class="flow-navigation">
    <button *ngIf="!isFirstStep" class="btn btn-outline" 
            (click)="goToPreviousStep()">
      {{ getPreviousButtonText() }}
    </button>
    <div *ngIf="isFirstStep"></div>
    <button class="btn btn-primary" (click)="handleNextClick()">
      {{ getButtonText() }}
    </button>
  </div>
</div>
```

### 3. **Migrar Estilos CSS**

#### Antes:
```scss
body.theme-rojo .app-button {
  background-color: #d32f2f;
}

body.theme-azul .app-button {
  background-color: #1565c0;
}
```

#### Después:
```scss
.btn-primary {
  background-color: var(--button-background);
  color: var(--button-text);
}

.btn-primary:hover {
  background-color: var(--button-hover);
}
```

### 4. **Actualizar Lógica de Inicialización**

#### Antes:
```typescript
ngOnInit(): void {
  this.flowService.setBank('rojo');
  const initialPath = this.flowService.getInitialPath('rojo');
  this.router.navigate([initialPath]);
}
```

#### Después:
```typescript
ngOnInit(): void {
  this.flowService.setCurrentProject('cardif-banco-rojo');
  // La navegación es automática
}
```

## 📁 Estructura de Archivos Nueva

```
src/app/
├── core/                           # ← NUEVO
│   ├── interfaces/
│   ├── config/
│   ├── services/
│   └── components/
├── services/
│   └── flow.service.ts            # ← MODIFICADO
├── components/                     # ← MODIFICADOS
└── config/
    └── bank-flows.ts              # ← ELIMINAR
```

## 🎯 Lista de Verificación

### ✅ **Para cada Componente:**

- [ ] Extender de `BaseFlowComponent`
- [ ] Definir `stepId` protegido
- [ ] Implementar `onValidateStep()`
- [ ] Actualizar constructor con servicios requeridos
- [ ] Actualizar template HTML con nueva estructura
- [ ] Eliminar lógica de navegación manual
- [ ] Usar métodos base (`getTitle()`, `getDescription()`, etc.)

### ✅ **Para cada Proyecto:**

- [ ] Crear archivo de configuración en `core/config/projects/`
- [ ] Definir configuración completa (`theme`, `flow`, `assets`, etc.)
- [ ] Registrar en `app.config.ts`
- [ ] Probar flujo completo
- [ ] Validar temas y estilos

### ✅ **Para Estilos:**

- [ ] Eliminar clases de tema específicas
- [ ] Usar CSS variables
- [ ] Aprovechar clases utilitarias nuevas
- [ ] Verificar responsividad

## 🚀 Beneficios Post-Migración

### **Antes de la Migración:**
- ❌ Configuración hardcodeada
- ❌ Código duplicado entre componentes
- ❌ Difícil agregar nuevos proyectos
- ❌ Estilos no reutilizables
- ❌ Lógica de navegación dispersa

### **Después de la Migración:**
- ✅ Configuración centralizada y dinámica
- ✅ Componentes reutilizables
- ✅ Nuevos proyectos en minutos
- ✅ Sistema de temas escalable
- ✅ Navegación automática y consistente

## 🔧 Script de Migración Automática

Puedes crear un script para automatizar parte de la migración:

```typescript
// migration-helper.ts
export class MigrationHelper {
  static generateComponentBase(componentName: string, stepId: string) {
    return `
import { Component } from '@angular/core';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-${componentName.toLowerCase()}',
  templateUrl: './${componentName.toLowerCase()}.component.html',
  styleUrls: ['./${componentName.toLowerCase()}.component.scss'],
})
export class ${componentName}Component extends BaseFlowComponent {
  protected stepId = '${stepId}';

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService
  ) {
    super(flowService, configService, themeService);
  }

  protected onValidateStep(): boolean {
    // TODO: Implementar validación específica
    return true;
  }
}
    `;
  }
}
```

## 🆘 Resolución de Problemas

### **Error: Cannot find module**
- Verificar que todos los nuevos archivos estén creados
- Comprobar rutas de importación
- Asegurar que `FormsModule` esté importado en `app.module.ts`

### **Error: CSS variables no funcionan**
- Verificar que `ThemeService` se inicialice correctamente
- Comprobar que el proyecto esté configurado en `app.config.ts`
- Inspeccionar variables CSS en DevTools

### **Error: Navegación no funciona**
- Verificar que el `stepId` coincida con la configuración del flujo
- Asegurar que `FlowService.setCurrentProject()` se llame primero
- Comprobar rutas en `app-routing.module.ts`

---

## 📞 Soporte

Si encuentras problemas durante la migración, revisa:

1. **Logs de consola** para errores específicos
2. **DevTools** para verificar CSS variables
3. **Network tab** para problemas de carga de recursos
4. **Esta documentación** para patrones correctos

La migración debería resultar en un **código más limpio, escalable y mantenible** 🚀
