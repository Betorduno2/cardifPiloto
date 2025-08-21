import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentThreeComponent } from './component-three.component';

describe('ComponentThreeComponent', () => {
  let component: ComponentThreeComponent;
  let fixture: ComponentFixture<ComponentThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentThreeComponent]
    });
    fixture = TestBed.createComponent(ComponentThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
