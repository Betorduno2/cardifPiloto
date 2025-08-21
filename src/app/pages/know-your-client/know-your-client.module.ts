import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { KnowYourClientComponent } from './know-your-client.component';

const routes: Routes = [
  { path: '', component: KnowYourClientComponent }
];

@NgModule({
  declarations: [
    KnowYourClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class KnowYourClientModule { }
