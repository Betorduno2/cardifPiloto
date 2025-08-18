# Architecture Documentation

## Overview

This Angular application follows a component-based architecture with dynamic theming capabilities. The application is structured to support multiple user flows while maintaining shared components and consistent styling.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── component-one/
│   │   ├── component-two/
│   │   ├── component-three/
│   │   └── component-four/
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   └── app.component.*
├── assets/
├── environments/
└── styles.scss
```

## Component Architecture

### Routing Configuration

The application uses Angular Router with the following route configuration in [`app-routing.module.ts`](src/app/app-routing.module.ts):

- `/componentOne` → [`ComponentOneComponent`](src/app/components/component-one/component-one.component.ts)
- `/componentTwo` → [`ComponentTwoComponent`](src/app/components/component-two/component-two.component.ts)
- `/componentThree` → [`ComponentThreeComponent`](src/app/components/component-three/component-three.component.ts)
- `/componentFour` → [`ComponentFourComponent`](src/app/components/component-four/component-four.component.ts)

### Shared Components

Components Two and Three are designed as shared components that can be used across different user flows while maintaining theme consistency.

## Theming System

### Theme Implementation

The application implements a CSS-based theming system using body classes:

- `theme-rojo` - Red theme for specific bank branding
- `theme-azul` - Blue theme for alternative bank branding

### Theme Classes

Defined in [`styles.scss`](src/styles.scss):

```scss
/* Red Theme */
body.theme-rojo .app-button { background-color: #d32f2f; }
body.theme-rojo .text-color { color: #d32f2f; }

/* Blue Theme */
body.theme-azul .app-button { background-color: #1565c0; }
body.theme-azul .text-color { color: #1565c0; }
```

## Module Structure

All components are declared in [`AppModule`](src/app/app.module.ts) with the following imports:

- `BrowserModule` - Core Angular functionality
- [`AppRoutingModule`](src/app/app-routing.module.ts) - Routing configuration

## Design Patterns

1. **Component-Based Architecture**: Each feature is encapsulated in its own component
2. **Shared Styling**: Global styles with theme-specific overrides
3. **Declarative Routing**: Clean URL structure for component navigation
4. **Theme Abstraction**: CSS classes allow for easy theme switching