import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../services/config.service';
import { ThemeService } from '../services/theme.service';
import { ProjectConfig, FlowStep } from '../interfaces/project-config.interface';

@Component({
  template: ''
})
export abstract class BaseFlowComponent implements OnInit, OnDestroy {
  protected destroy$ = new Subject<void>();
  
  public currentProject: ProjectConfig | null = null;
  public currentStep: FlowStep | null = null;
  public stepConfig: any = {};
  public isFirstStep = false;
  public isLastStep = false;
  public progress = 0;

  protected abstract stepId: string;

  constructor(
    protected flowService: FlowService,
    protected configService: ConfigService,
    protected themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.initializeComponent();
    this.subscribeToConfigChanges();
    this.loadStepConfiguration();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private initializeComponent(): void {
    this.currentProject = this.configService.getCurrentProject();
    this.currentStep = this.flowService.getCurrentStep();
  }

  private subscribeToConfigChanges(): void {
    this.configService.currentProject$
      .pipe(takeUntil(this.destroy$))
      .subscribe((project: any) => {
        this.currentProject = project;
        this.onProjectChanged(project);
      });

    this.flowService.currentStep$
      .pipe(takeUntil(this.destroy$))
      .subscribe((step: any) => {
        this.currentStep = step;
        this.onStepChanged(step);
      });
  }

  private loadStepConfiguration(): void {
    this.stepConfig = this.flowService.getStepConfig(this.stepId);
    this.isFirstStep = this.flowService.isFirstStep(this.stepId);
    this.isLastStep = this.flowService.isLastStep(this.stepId);
    this.progress = this.flowService.getFlowProgress(this.stepId);
  }

  // Métodos que pueden ser sobrescritos por componentes hijos
  protected onProjectChanged(project: ProjectConfig | null): void {
    // Implementación por defecto vacía
  }

  protected onStepChanged(step: FlowStep | null): void {
    // Implementación por defecto vacía
  }

  // Métodos de navegación
  public goToNextStep(): void {
    this.flowService.goToNextStep(this.stepId);
  }

  public goToPreviousStep(): void {
    if (!this.isFirstStep) {
      this.flowService.goToPreviousStep(this.stepId);
    }
  }

  // Métodos de utilidad
  public getTitle(): string {
    return this.stepConfig.title || 'Sin título';
  }

  public getDescription(): string {
    return this.stepConfig.description || '';
  }

  public getButtonText(): string {
    return this.stepConfig.buttonText || (this.isLastStep ? 'Finalizar' : 'Siguiente');
  }

  public getPreviousButtonText(): string {
    return 'Anterior';
  }

  // Método abstracto que debe ser implementado por cada componente
  protected abstract onValidateStep(): boolean;

  public handleNextClick(): void {
    if (this.onValidateStep()) {
      this.goToNextStep();
    }
  }
}
