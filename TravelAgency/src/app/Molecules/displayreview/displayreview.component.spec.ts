import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayreviewComponent } from './displayreview.component';

describe('DisplayreviewComponent', () => {
  let component: DisplayreviewComponent;
  let fixture: ComponentFixture<DisplayreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
