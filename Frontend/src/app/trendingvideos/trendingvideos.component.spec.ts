import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingvideosComponent } from './trendingvideos.component';

describe('TrendingvideosComponent', () => {
  let component: TrendingvideosComponent;
  let fixture: ComponentFixture<TrendingvideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingvideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingvideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
