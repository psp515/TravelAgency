import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripsFilterComponent } from './trips-filter.component';

describe('TripsFilterComponent', () => {
  let component: TripsFilterComponent;
  let fixture: ComponentFixture<TripsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripsFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
