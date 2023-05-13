import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VSeventComponent } from './vsevent.component';

describe('VSeventComponent', () => {
  let component: VSeventComponent;
  let fixture: ComponentFixture<VSeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VSeventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VSeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
