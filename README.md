# PilotoCardif

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

## Project Overview

This Angular application implements a dynamic theming system with multiple components that share styling based on different banks/themes. The application uses routing to navigate between different components while maintaining consistent theming.

### Key Features

- **Dynamic Theming**: Theme switching between different banks (red and blue themes)
- **Component Routing**: Navigation between ComponentOne, ComponentTwo, ComponentThree, and ComponentFour
- **Shared Components**: Components Two and Three are used across different flows
- **Responsive Design**: Consistent styling across all components

### Project Structure

- `src/app/components/` - Contains all application components
- `src/app/app-routing.module.ts` - Defines routing configuration
- `src/styles.scss` - Global styles with theme-specific CSS classes

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.