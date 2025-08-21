import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComponentThreeMockService {
  getMockData() {
    return { value: 'Mock data for Component Three' };
  }
}
