import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripbuttonComponent } from './tripbutton.component';

describe('TripbuttonComponent', () => {
  let component: TripbuttonComponent;
  let fixture: ComponentFixture<TripbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
