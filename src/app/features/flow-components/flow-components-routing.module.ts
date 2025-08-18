import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from '../../components/component-one/component-one.component';
import { ComponentTwoComponent } from '../../components/component-two/component-two.component';
import { ComponentThreeComponent } from '../../components/component-three/component-three.component';
import { ComponentFourComponent } from '../../components/component-four/component-four.component';

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
