import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredeventsComponent } from './expiredevents.component';

describe('ExpiredeventsComponent', () => {
  let component: ExpiredeventsComponent;
  let fixture: ComponentFixture<ExpiredeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpiredeventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpiredeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
