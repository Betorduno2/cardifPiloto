import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDimensionsComponent } from './details-dimensions.component';

describe('DetailsDimensionsComponent', () => {
  let component: DetailsDimensionsComponent;
  let fixture: ComponentFixture<DetailsDimensionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsDimensionsComponent]
    });
    fixture = TestBed.createComponent(DetailsDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
