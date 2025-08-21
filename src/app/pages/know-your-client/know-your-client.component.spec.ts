import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourClientComponent } from './know-your-client.component';

describe('KnowYourClientComponent', () => {
  let component: KnowYourClientComponent;
  let fixture: ComponentFixture<KnowYourClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowYourClientComponent]
    });
    fixture = TestBed.createComponent(KnowYourClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
