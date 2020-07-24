import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadeventsComponent } from './uploadevents.component';

describe('UploadeventsComponent', () => {
  let component: UploadeventsComponent;
  let fixture: ComponentFixture<UploadeventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadeventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
