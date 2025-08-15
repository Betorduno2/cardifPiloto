import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowService } from 'src/app/services/flow.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.scss'],
})
export class ComponentTwoComponent {
  constructor(public flowService: FlowService) {}
  goToNextStep() {
    if (this.flowService.currentBank === 'rojo') {
      this.flowService.goToNextStep('rojo-step1');
    } else if (this.flowService.currentBank === 'azul') {
      this.flowService.goToNextStep('azul-step2');
    }
  }
}
