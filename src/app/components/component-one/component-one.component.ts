import { Component } from '@angular/core';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent extends BaseFlowComponent {
  protected stepId = 'azul-step1';

  // Datos específicos del componente
  userInput = '';
  isValid = false;

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService
  ) {
    super(flowService, configService, themeService);
  }

  protected onValidateStep(): boolean {
    // Lógica de validación específica del componente
    this.isValid = this.userInput.trim().length > 3;
    
    if (!this.isValid) {
      alert('Por favor, ingresa un valor válido (mínimo 4 caracteres)');
    }
    
    return this.isValid;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.userInput = target.value;
    this.isValid = this.userInput.trim().length > 3;
  }

  // Método específico para este componente
  resetForm(): void {
    this.userInput = '';
    this.isValid = false;
  }
}
