import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComponentTwoMockService {
  getMockData() {
    return { value: 'Mock data for Component Two' };
  }
}
