import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinWithOurTeamComponent } from './join-with-our-team.component';

describe('JoinWithOurTeamComponent', () => {
  let component: JoinWithOurTeamComponent;
  let fixture: ComponentFixture<JoinWithOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinWithOurTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinWithOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
