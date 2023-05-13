import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeduserComponent } from './subscribeduser.component';

describe('SubscribeduserComponent', () => {
  let component: SubscribeduserComponent;
  let fixture: ComponentFixture<SubscribeduserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeduserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscribeduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
