import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/protections/protections.state';
import * as ProtectionsActions from '../../store/protections/protections.actions';
import { selectProtectionsData, selectProtectionsLoading, selectProtectionsError } from '../../store/protections/protections.selectors';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-protections',
  templateUrl: './protections.component.html',
  styleUrls: ['./protections.component.scss']
})
export class ProtectionsComponent extends BaseFlowComponent {
  data$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  protected stepId = 'rojo-step3'; // Se actualizará dinámicamente

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService,
    private store: Store<AppState>
  ) {
    super(flowService, configService, themeService);
    this.data$ = this.store.select(selectProtectionsData);
    this.loading$ = this.store.select(selectProtectionsLoading);
    this.error$ = this.store.select(selectProtectionsError);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.updateStepIdForComponent();
    this.store.dispatch(ProtectionsActions.loadProtectionsData());
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
