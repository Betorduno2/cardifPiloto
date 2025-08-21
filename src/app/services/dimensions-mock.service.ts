import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DimensionsMockService {
  getMockData() {
    return { value: 'Mock data for Dimensions' };
  }
}
