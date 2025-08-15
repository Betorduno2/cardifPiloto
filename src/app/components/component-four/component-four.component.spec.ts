import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFourComponent } from './component-four.component';

describe('ComponentFourComponent', () => {
  let component: ComponentFourComponent;
  let fixture: ComponentFixture<ComponentFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentFourComponent]
    });
    fixture = TestBed.createComponent(ComponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
