import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProjectConfig, ThemeConfig, FlowStep } from '../interfaces/project-config.interface';
import { APP_CONFIG, getProjectConfig } from '../config/app.config';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly STORAGE_KEY = 'currentProjectId';
  private currentProjectSubject = new BehaviorSubject<ProjectConfig | null>(null);
  
  public currentProject$: Observable<ProjectConfig | null> = this.currentProjectSubject.asObservable();

  constructor(private environmentService: EnvironmentService) {
    this.initializeProject();
  }

  private initializeProject(): void {
    let projectId: string;
    
    // En desarrollo, permitir usar localStorage, en producción usar environment
    if (this.environmentService.isProjectSwitchingAllowed()) {
      const savedProjectId = localStorage.getItem(this.STORAGE_KEY);
      projectId = savedProjectId || this.environmentService.getDefaultProject();
    } else {
      projectId = this.environmentService.getDefaultProject();
    }
    
    this.setCurrentProject(projectId);
  }

  setCurrentProject(projectId: string): boolean {
    // Verificar si el proyecto está disponible en este ambiente
    const availableProjects = this.environmentService.getAvailableProjects();
    if (!availableProjects.includes(projectId)) {
      this.environmentService.log('error', `Project "${projectId}" not available in ${this.environmentService.getEnvironment().environmentName} environment`);
      return false;
    }

    const project = getProjectConfig(projectId);
    
    if (!project) {
      this.environmentService.log('error', `Project with ID "${projectId}" not found`);
      return false;
    }

    this.currentProjectSubject.next(project);
    
    // Solo guardar en localStorage si está permitido
    if (this.environmentService.isProjectSwitchingAllowed()) {
      localStorage.setItem(this.STORAGE_KEY, projectId);
    }
    
    APP_CONFIG.currentProject = projectId;
    
    this.environmentService.log('info', `Project changed to: ${projectId}`);
    return true;
  }

  getCurrentProject(): ProjectConfig | null {
    return this.currentProjectSubject.value;
  }

  getThemeConfig(): ThemeConfig | null {
    const project = this.getCurrentProject();
    return project ? project.theme : null;
  }

  getFlowSteps(): FlowStep[] {
    const project = this.getCurrentProject();
    return project ? project.flow : [];
  }

  getAssets(): Record<string, any> {
    const project = this.getCurrentProject();
    return project ? project.assets : {};
  }

  getFeatures(): Record<string, boolean> {
    const project = this.getCurrentProject();
    return project ? project.features : {};
  }

  getApiConfig(): { baseUrl: string; endpoints: Record<string, string> } | null {
    const project = this.getCurrentProject();
    return project ? project.api : null;
  }

  getAvailableProjects(): string[] {
    return Object.keys(APP_CONFIG.projects);
  }

  isFeatureEnabled(feature: string): boolean {
    const features = this.getFeatures();
    return features[feature] || false;
  }
}
