import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/details-dimensions/details-dimensions.state';
import * as DetailsDimensionsActions from '../../store/details-dimensions/details-dimensions.actions';
import { selectDetailsDimensionsData, selectDetailsDimensionsLoading, selectDetailsDimensionsError } from '../../store/details-dimensions/details-dimensions.selectors';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-details-dimensions',
  templateUrl: './details-dimensions.component.html',
  styleUrls: ['./details-dimensions.component.scss']
})
export class DetailsDimensionsComponent extends BaseFlowComponent {
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
    this.data$ = this.store.select(selectDetailsDimensionsData);
    this.loading$ = this.store.select(selectDetailsDimensionsLoading);
    this.error$ = this.store.select(selectDetailsDimensionsError);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.updateStepIdForComponent();
    this.store.dispatch(DetailsDimensionsActions.loadDetailsDimensionsData());
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
