import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from '../../pages/component-one/component-one.component';
import { ComponentTwoComponent } from '../../pages/component-two/component-two.component';
import { ComponentThreeComponent } from '../../pages/component-three/component-three.component';
import { ComponentFourComponent } from '../../pages/component-four/component-four.component';

const routes: Routes = [
  { path: 'step1', component: ComponentOneComponent },
  { path: 'step2', component: ComponentTwoComponent },
  { path: 'step3', component: ComponentThreeComponent },
  { path: 'step4', component: ComponentFourComponent },
  { path: '', redirectTo: 'step1', pathMatch: 'full' }
];

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
    RouterModule.forChild(routes)
  ]
})
export class CardifBancoAzulModule { }
