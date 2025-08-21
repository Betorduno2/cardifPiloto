import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ComponentOneMockService {
  getMockData() {
    return { value: 'Mock data for Component One' };
  }
}
