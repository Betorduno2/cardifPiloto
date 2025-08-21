import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class KnowYourClientMockService {
  getMockData() {
    return { value: 'Mock data for Know Your Client' };
  }
}
