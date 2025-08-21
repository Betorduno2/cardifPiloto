import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProtectionsMockService {
  getMockData() {
    return { value: 'Mock data for Protections' };
  }
}
