import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComponentFourMockService {
  getMockData() {
    return { value: 'Mock data for Component Four' };
  }
}
