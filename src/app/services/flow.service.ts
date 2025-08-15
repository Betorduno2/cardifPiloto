import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BANK_FLOWS } from '../config/bank-flows';

@Injectable({
  providedIn: 'root',
})
export class FlowService {
  public currentBank: 'rojo' | 'azul' = (localStorage.getItem('bankId') as 'rojo' | 'azul') || 'azul';

  constructor(private router: Router) {}

  private setTheme(bankId: 'rojo' | 'azul') {
    const body = document.body;
    body.classList.remove('theme-red', 'theme-blue');
    body.classList.add(`theme-${bankId}`);
  }


  setBank(bankId: 'rojo' | 'azul') {
    this.setTheme(bankId)
    this.currentBank = bankId;
    localStorage.setItem('bankId', bankId);
  }

  goToNextStep(currentStepId: string) {
    const flow = BANK_FLOWS[this.currentBank];
    const currentIndex = flow.findIndex(
      (step) => step.stepId === currentStepId
    );

    if (currentIndex !== -1 && currentIndex < flow.length - 1) {
      const nextStep = flow[currentIndex + 1];
      // No pasamos el bank en la URL porque ya está en el servicio
      this.router.navigate([nextStep.path]);
    } else {
      console.log('Fin del flujo:', this.currentBank);
    }
  }

   getInitialPath(bankId: 'rojo' | 'azul'): string {
    const flow = BANK_FLOWS[bankId];
    return flow && flow.length > 0 ? flow[0].path : '';
  }
}
