import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// NgRx imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { themeReducer } from './store/theme/theme.reducer';
import { knowYourClientReducer } from './store/know-your-client/know-your-client.reducer';
import { dimensionsReducer } from './store/dimensions/dimensions.reducer';
import { detailsDimensionsReducer } from './store/details-dimensions/details-dimensions.reducer';
import { protectionsReducer } from './store/protections/protections.reducer';
import { KnowYourClientEffects } from './store/know-your-client/know-your-client.effects';
import { DimensionsEffects } from './store/dimensions/dimensions.effects';
import { DetailsDimensionsEffects } from './store/details-dimensions/details-dimensions.effects';
import { ProtectionsEffects } from './store/protections/protections.effects';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      theme: themeReducer,
      knowYourClient: knowYourClientReducer,
      dimensions: dimensionsReducer,
      detailsDimensions: detailsDimensionsReducer,
      protections: protectionsReducer
    }),
    EffectsModule.forRoot([
      KnowYourClientEffects,
      DimensionsEffects,
      DetailsDimensionsEffects,
      ProtectionsEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
