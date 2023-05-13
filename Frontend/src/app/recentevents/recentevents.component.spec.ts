import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenteventsComponent } from './recentevents.component';

describe('RecenteventsComponent', () => {
  let component: RecenteventsComponent;
  let fixture: ComponentFixture<RecenteventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenteventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecenteventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
