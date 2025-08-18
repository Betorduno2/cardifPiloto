# Environment Configuration

## Overview

This document describes the environment configuration setup for the PilotoCardif Angular application.

## Environment Files

The application uses Angular's standard environment configuration:

- `src/environments/environment.ts` - Development environment
- `src/environments/environment.prod.ts` - Production environment

## Configuration Structure

```typescript
export const environment = {
  production: false,
  // Add environment-specific configurations here
};
```

## Theme Configuration

Environment-specific theme settings can be configured here:

```typescript
export const environment = {
  production: false,
  defaultTheme: 'theme-azul', // or 'theme-rojo'
  bankConfigs: {
    banco1: {
      theme: 'theme-rojo',
      name: 'Banco Rojo'
    },
    banco2: {
      theme: 'theme-azul', 
      name: 'Banco Azul'
    }
  }
};
```

## Build Configuration

The build process automatically replaces environment files based on the build target configured in [`angular.json`](angular.json).

## Usage

Import environment configuration in your services:

```typescript
import { environment } from '../environments/environment';
```