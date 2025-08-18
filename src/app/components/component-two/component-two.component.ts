import { Component } from '@angular/core';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
})
export class ComponentTwoComponent extends BaseFlowComponent {
  protected stepId = 'rojo-step1'; // Este stepId se actualizará dinámicamente

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService
  ) {
    super(flowService, configService, themeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // Determinar el stepId correcto basado en el proyecto actual
    this.updateStepIdForComponent();
  }

  private updateStepIdForComponent(): void {
    const project = this.configService.getCurrentProject();
    if (project) {
      // Buscar el step que corresponde a este componente
      const step = project.flow.find(s => s.path === 'componentTwo');
      if (step) {
        this.stepId = step.stepId;
        this.refreshStepConfiguration();
      }
    }
  }

  private refreshStepConfiguration(): void {
    this.stepConfig = this.flowService.getStepConfig(this.stepId);
    this.isFirstStep = this.flowService.isFirstStep(this.stepId);
    this.isLastStep = this.flowService.isLastStep(this.stepId);
    this.progress = this.flowService.getFlowProgress(this.stepId);
  }

  protected onValidateStep(): boolean {
    // Lógica de validación para este componente
    return true;
  }
}
