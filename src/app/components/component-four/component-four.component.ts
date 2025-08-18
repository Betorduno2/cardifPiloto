import { Component } from '@angular/core';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-component-four',
  templateUrl: './component-four.component.html',
  styleUrls: ['./component-four.component.scss']
})
export class ComponentFourComponent extends BaseFlowComponent {
  protected stepId = 'rojo-step3'; // Se actualizará dinámicamente

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService
  ) {
    super(flowService, configService, themeService);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.updateStepIdForComponent();
  }

  private updateStepIdForComponent(): void {
    const project = this.configService.getCurrentProject();
    if (project) {
      const step = project.flow.find(s => s.path === 'componentFour');
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
    return true;
  }
}
