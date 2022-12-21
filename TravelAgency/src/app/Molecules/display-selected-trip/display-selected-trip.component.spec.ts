import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedTripComponent } from './display-selected-trip.component';

describe('DisplaySelectedTripComponent', () => {
  let component: DisplaySelectedTripComponent;
  let fixture: ComponentFixture<DisplaySelectedTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySelectedTripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySelectedTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
