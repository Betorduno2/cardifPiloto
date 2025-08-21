import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowYourClientComponent } from '../../pages/know-your-client/know-your-client.component';
import { DimensionsComponent } from '../../pages/dimensions/dimensions.component';
import { DetailsDimensionsComponent } from '../../pages/details-dimensions/details-dimensions.component';
import { ProtectionsComponent } from '../../pages/protections/protections.component';

const routes: Routes = [
  { path: 'componentOne', component: KnowYourClientComponent },
  { path: 'componentTwo', component: DimensionsComponent },
  { path: 'componentThree', component: DetailsDimensionsComponent },
  { path: 'componentFour', component: ProtectionsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowComponentsRoutingModule { }
