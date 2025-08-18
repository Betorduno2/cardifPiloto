import { Component, OnInit } from '@angular/core';
import { FlowService } from './services/flow.service';
import { ConfigService } from './core/services/config.service';
import { ThemeService } from './core/services/theme.service';
import { EnvironmentService } from './core/services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Cardif Piloto';

  constructor(
    private flowService: FlowService,
    private configService: ConfigService,
    private themeService: ThemeService,
    private environmentService: EnvironmentService
  ) {}

  ngOnInit(): void {
    // Log información del ambiente actual
    this.environmentService.log('info', 'Initializing application', {
      environment: this.environmentService.getEnvironment().environmentName,
      defaultProject: this.environmentService.getDefaultProject(),
      debugMode: this.environmentService.isDebugModeEnabled()
    });

    // Usar el proyecto por defecto del environment
    const defaultProject = this.environmentService.getDefaultProject();
    this.flowService.setCurrentProject(defaultProject);

    // En desarrollo, mostrar información adicional
    if (this.environmentService.isDevelopment()) {
      console.log('🔧 Development mode - Available projects:', 
        this.environmentService.getAvailableProjects());
      console.log('🎨 Project switching allowed:', 
        this.environmentService.isProjectSwitchingAllowed());
    }
  }

  // Método para cambiar proyecto (solo si está permitido)
  switchProject(projectId: string): void {
    if (this.environmentService.isProjectSwitchingAllowed()) {
      this.flowService.setCurrentProject(projectId);
      this.environmentService.log('info', `Project switched to: ${projectId}`);
    } else {
      this.environmentService.log('warn', 'Project switching not allowed in this environment');
    }
  }
}
