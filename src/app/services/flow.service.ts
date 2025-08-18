import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from '../core/services/config.service';
import { FlowStep } from '../core/interfaces/project-config.interface';

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  private currentStepSubject = new BehaviorSubject<FlowStep | null>(null);
  public currentStep$: Observable<FlowStep | null> = this.currentStepSubject.asObservable();

  constructor(
    private router: Router,
    private configService: ConfigService
  ) {}

  private getCurrentFlowSteps(): FlowStep[] {
    return this.configService.getFlowSteps();
  }

  setCurrentProject(projectId: string): boolean {
    const success = this.configService.setCurrentProject(projectId);
    if (success) {
      this.navigateToInitialStep();
    }
    return success;
  }

  navigateToInitialStep(): void {
    const steps = this.getCurrentFlowSteps();
    if (steps.length > 0) {
      this.navigateToStep(steps[0]);
    }
  }

  goToNextStep(currentStepId: string): void {
    const steps = this.getCurrentFlowSteps();
    const currentIndex = steps.findIndex(step => step.stepId === currentStepId);

    if (currentIndex !== -1 && currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1];
      this.navigateToStep(nextStep);
    } else {
      this.handleFlowComplete();
    }
  }

  goToPreviousStep(currentStepId: string): void {
    const steps = this.getCurrentFlowSteps();
    const currentIndex = steps.findIndex(step => step.stepId === currentStepId);

    if (currentIndex > 0) {
      const previousStep = steps[currentIndex - 1];
      this.navigateToStep(previousStep);
    }
  }

  private navigateToStep(step: FlowStep): void {
    this.currentStepSubject.next(step);
    this.router.navigate([step.path]);
  }

  private handleFlowComplete(): void {
    const project = this.configService.getCurrentProject();
    console.log(`Flujo completado para el proyecto: ${project?.name}`);
    // Aquí podrías implementar lógica adicional como redirección a página de éxito
  }

  getCurrentStep(): FlowStep | null {
    return this.currentStepSubject.value;
  }

  getStepConfig(stepId: string): any {
    const steps = this.getCurrentFlowSteps();
    const step = steps.find(s => s.stepId === stepId);
    return step?.config || {};
  }

  isFirstStep(stepId: string): boolean {
    const steps = this.getCurrentFlowSteps();
    return steps.length > 0 && steps[0].stepId === stepId;
  }

  isLastStep(stepId: string): boolean {
    const steps = this.getCurrentFlowSteps();
    return steps.length > 0 && steps[steps.length - 1].stepId === stepId;
  }

  getFlowProgress(currentStepId: string): number {
    const steps = this.getCurrentFlowSteps();
    const currentIndex = steps.findIndex(step => step.stepId === currentStepId);
    
    if (currentIndex === -1 || steps.length === 0) return 0;
    
    return Math.round(((currentIndex + 1) / steps.length) * 100);
  }
}
