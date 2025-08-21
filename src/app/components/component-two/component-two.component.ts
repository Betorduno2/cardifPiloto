import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/component-two/component-two.state';
import * as ComponentTwoActions from '../../store/component-two/component-two.actions';
import { selectComponentTwoData, selectComponentTwoLoading, selectComponentTwoError } from '../../store/component-two/component-two.selectors';
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
  data$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  protected stepId = 'rojo-step1'; // Este stepId se actualizará dinámicamente

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService,
    private store: Store<AppState>
  ) {
    super(flowService, configService, themeService);
    this.data$ = this.store.select(selectComponentTwoData);
    this.loading$ = this.store.select(selectComponentTwoLoading);
    this.error$ = this.store.select(selectComponentTwoError);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // Determinar el stepId correcto basado en el proyecto actual
    this.updateStepIdForComponent();
    this.store.dispatch(ComponentTwoActions.loadComponentTwoData());
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
