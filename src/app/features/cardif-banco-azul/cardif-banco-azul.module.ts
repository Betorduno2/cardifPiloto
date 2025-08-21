import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { KnowYourClientComponent } from '../../pages/know-your-client/know-your-client.component';
import { DimensionsComponent } from '../../pages/dimensions/dimensions.component';
import { DetailsDimensionsComponent } from '../../pages/details-dimensions/details-dimensions.component';
import { ProtectionsComponent } from '../../pages/protections/protections.component';

const routes: Routes = [
  { path: 'step1', component: KnowYourClientComponent },
  { path: 'step2', component: DimensionsComponent },
  { path: 'step3', component: DetailsDimensionsComponent },
  { path: 'step4', component: ProtectionsComponent },
  { path: '', redirectTo: 'step1', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    KnowYourClientComponent,
    DimensionsComponent,
    DetailsDimensionsComponent,
    ProtectionsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CardifBancoAzulModule { }
