import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ComponentTwoComponent } from './component-two.component';

const routes: Routes = [
  { path: '', component: ComponentTwoComponent }
];

@NgModule({
  declarations: [
    ComponentTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ComponentTwoModule { }
