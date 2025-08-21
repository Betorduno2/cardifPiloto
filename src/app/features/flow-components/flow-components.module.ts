import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlowComponentsRoutingModule } from './flow-components-routing.module';
import { KnowYourClientComponent } from '../../pages/know-your-client/know-your-client.component';
import { DimensionsComponent } from '../../pages/dimensions/dimensions.component';
import { DetailsDimensionsComponent } from '../../pages/details-dimensions/details-dimensions.component';
import { ProtectionsComponent } from '../../pages/protections/protections.component';

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
    FlowComponentsRoutingModule
  ]
})
export class FlowComponentsModule { }
