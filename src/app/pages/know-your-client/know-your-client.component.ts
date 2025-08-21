import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { BaseFlowComponent } from '../../core/components/base-flow.component';
import { FlowService } from '../../services/flow.service';
import { ConfigService } from '../../core/services/config.service';
import { ThemeService } from '../../core/services/theme.service';
import { ThemeStoreService } from '../../services/theme-store.service';
import { AppState } from '../../store';
import { loadKnowYourClientData } from '../../store/know-your-client/know-your-client.actions';
import { 
  selectKnowYourClientData, 
  selectKnowYourClientLoading, 
  selectKnowYourClientError 
} from '../../store/know-your-client/know-your-client.selectors';

@Component({
  selector: 'app-know-your-client',
  templateUrl: './know-your-client.component.html',
  styleUrls: ['./know-your-client.component.scss'],
})
export class KnowYourClientComponent extends BaseFlowComponent implements OnInit {
  data$: Observable<any>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  protected stepId = 'azul-step1';

  // Observable del tema actual desde Redux
  currentTheme$: Observable<'theme-rojo' | 'theme-azul'>;
  availableThemes$: Observable<string[]>;

  constructor(
    flowService: FlowService,
    configService: ConfigService,
    themeService: ThemeService,
    private themeStoreService: ThemeStoreService,
    private store: Store<AppState>
  ) {
    super(flowService, configService, themeService);
    this.currentTheme$ = this.themeStoreService.getCurrentTheme();
    this.availableThemes$ = this.themeStoreService.getAvailableThemes();
    this.data$ = this.store.select(selectKnowYourClientData);
    this.loading$ = this.store.select(selectKnowYourClientLoading);
    this.error$ = this.store.select(selectKnowYourClientError);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    // Inicializar el tema en el store
    // this.themeStoreService.setTheme('theme-azul'); // Comentado hasta verificar método correcto
    // Cargar datos específicos de este componente
    this.store.dispatch(loadKnowYourClientData());
  }

  // Método de validación específico para este componente
  protected override onValidateStep(): boolean {
    // Para la página de bienvenida, no se requiere validación específica
    // El usuario puede continuar directamente
    return true;
  }
}