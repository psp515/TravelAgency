import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHistComponent } from './trip-hist.component';

describe('TripHistComponent', () => {
  let component: TripHistComponent;
  let fixture: ComponentFixture<TripHistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripHistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
