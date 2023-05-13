import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MgviewlleventsComponent } from './mgviewllevents.component';

describe('MgviewlleventsComponent', () => {
  let component: MgviewlleventsComponent;
  let fixture: ComponentFixture<MgviewlleventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MgviewlleventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MgviewlleventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
