import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionsComponent } from './protections.component';

describe('ProtectionsComponent', () => {
  let component: ProtectionsComponent;
  let fixture: ComponentFixture<ProtectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtectionsComponent]
    });
    fixture = TestBed.createComponent(ProtectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
