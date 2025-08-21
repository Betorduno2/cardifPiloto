import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlowComponentsRoutingModule } from './flow-components-routing.module';
import { ComponentOneComponent } from '../../pages/component-one/component-one.component';
import { ComponentTwoComponent } from '../../pages/component-two/component-two.component';
import { ComponentThreeComponent } from '../../pages/component-three/component-three.component';
import { ComponentFourComponent } from '../../pages/component-four/component-four.component';

@NgModule({
  declarations: [
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentFourComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FlowComponentsRoutingModule
  ]
})
export class FlowComponentsModule { }
