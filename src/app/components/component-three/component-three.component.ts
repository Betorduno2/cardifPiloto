import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowService } from 'src/app/services/flow.service';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.scss']
})
export class ComponentThreeComponent {
constructor(public flowService: FlowService) {}
  goToNextStep() {
    if (this.flowService.currentBank === 'rojo') {
      this.flowService.goToNextStep('rojo-step2');
    } else if (this.flowService.currentBank === 'azul') {
      this.flowService.goToNextStep('azul-step3');
    }
  }

}
