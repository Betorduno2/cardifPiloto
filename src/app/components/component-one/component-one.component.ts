import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowService } from 'src/app/services/flow.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent {
  bankId!: 'rojo' | 'azul';

  constructor(
    private route: ActivatedRoute,
    public flowService: FlowService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.bankId = params['bank'];
      //this.themeService.setTheme(this.bankId);
    });
  }

  goToNextStep() {
    this.flowService.goToNextStep('azul-step1');
  }
}
