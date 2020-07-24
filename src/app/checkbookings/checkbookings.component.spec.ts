import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckbookingsComponent } from './checkbookings.component';

describe('CheckbookingsComponent', () => {
  let component: CheckbookingsComponent;
  let fixture: ComponentFixture<CheckbookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckbookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckbookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
