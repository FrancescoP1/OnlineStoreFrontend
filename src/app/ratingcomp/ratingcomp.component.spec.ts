import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingcompComponent } from './ratingcomp.component';

describe('RatingcompComponent', () => {
  let component: RatingcompComponent;
  let fixture: ComponentFixture<RatingcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
