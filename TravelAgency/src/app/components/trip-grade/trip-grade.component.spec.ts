import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripGradeComponent } from './trip-grade.component';

describe('TripGradeComponent', () => {
  let component: TripGradeComponent;
  let fixture: ComponentFixture<TripGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
