import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckcvsComponent } from './checkcvs.component';

describe('CheckcvsComponent', () => {
  let component: CheckcvsComponent;
  let fixture: ComponentFixture<CheckcvsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckcvsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckcvsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
