import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/component-three/component-three.state';
import * as ComponentThreeActions from '../../store/component-three/component-three.actions';
import { selectComponentThreeData, selectComponentThreeLoading, selectComponentThreeError } from '../../store/component-three/component-three.selectors';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent extends BaseFlowComponent {
  data$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  protected stepId = 'rojo-step2'; // Se actualizará dinámicamente

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService,
    private store: Store<AppState>
  ) {
    super(flowService, configService, themeService);
    this.data$ = this.store.select(selectComponentThreeData);
    this.loading$ = this.store.select(selectComponentThreeLoading);
    this.error$ = this.store.select(selectComponentThreeError);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.updateStepIdForComponent();
    this.store.dispatch(ComponentThreeActions.loadComponentThreeData());
  }

  private updateStepIdForComponent(): void {
    const project = this.configService.getCurrentProject();
    if (project) {
      const step = project.flow.find(s => s.path === 'componentThree');
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
