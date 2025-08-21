import { ThemeState } from './theme/theme.state';
import { KnowYourClientState } from './know-your-client/know-your-client.reducer';
import { DimensionsState } from './dimensions/dimensions.reducer';
import { DetailsDimensionsState } from './details-dimensions/details-dimensions.reducer';
import { ProtectionsState } from './protections/protections.reducer';

export interface AppState {
  theme: ThemeState;
  knowYourClient: KnowYourClientState;
  dimensions: DimensionsState;
  detailsDimensions: DetailsDimensionsState;
  protections: ProtectionsState;
}

export * from './theme/theme.state';
export * from './theme/theme.actions';
export * from './theme/theme.reducer';
export * from './theme/theme.selectors';
