import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlowComponentsRoutingModule } from './flow-components-routing.module';
import { ComponentOneComponent } from '../../components/component-one/component-one.component';
import { ComponentTwoComponent } from '../../components/component-two/component-two.component';
import { ComponentThreeComponent } from '../../components/component-three/component-three.component';
import { ComponentFourComponent } from '../../components/component-four/component-four.component';

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
