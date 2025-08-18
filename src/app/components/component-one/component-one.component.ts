import { Component, OnInit } from '@angular/core';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeStoreService } from '../../services/theme-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent extends BaseFlowComponent implements OnInit {
  protected stepId = 'azul-step1';

  // Datos específicos del componente
  userInput = '';
  isValid = false;

  // Observable del tema actual desde Redux
  currentTheme$: Observable<'theme-rojo' | 'theme-azul'>;
  availableThemes$: Observable<string[]>;

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService,
    private themeStoreService: ThemeStoreService
  ) {
    super(flowService, configService, themeService);
    
    // Suscribirse a los observables del store
    this.currentTheme$ = this.themeStoreService.getCurrentTheme();
    this.availableThemes$ = this.themeStoreService.getAvailableThemes();
  }

  override ngOnInit(): void {
    super.ngOnInit();
    
    // Inicializar el tema en el store
    this.themeStoreService.loadTheme();
    
    // Suscribirse a cambios de tema
    this.currentTheme$.subscribe(theme => {
      console.log('Tema actual desde Redux:', theme);
    });
  }

  // Método para cambiar tema usando Redux
  switchTheme(): void {
    this.currentTheme$.subscribe(currentTheme => {
      const newTheme = currentTheme === 'theme-rojo' ? 'theme-azul' : 'theme-rojo';
      this.themeStoreService.changeTheme(newTheme);
    }).unsubscribe();
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
