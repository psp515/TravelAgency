import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriplistComponent } from './triplist.component';

describe('TriplistComponent', () => {
  let component: TriplistComponent;
  let fixture: ComponentFixture<TriplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriplistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
