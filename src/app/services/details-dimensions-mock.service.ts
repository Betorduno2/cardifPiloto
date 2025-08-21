import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DetailsDimensionsMockService {
  getMockData() {
    return { value: 'Mock data for Details Dimensions' };
  }
}
