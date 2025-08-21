import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from '../../pages/component-one/component-one.component';
import { ComponentTwoComponent } from '../../pages/component-two/component-two.component';
import { ComponentThreeComponent } from '../../pages/component-three/component-three.component';
import { ComponentFourComponent } from '../../pages/component-four/component-four.component';

const routes: Routes = [
  { path: 'componentOne', component: ComponentOneComponent },
  { path: 'componentTwo', component: ComponentTwoComponent },
  { path: 'componentThree', component: ComponentThreeComponent },
  { path: 'componentFour', component: ComponentFourComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowComponentsRoutingModule { }
