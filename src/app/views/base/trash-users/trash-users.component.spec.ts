import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashUsersComponent } from './trash-users.component';

describe('TrashUsersComponent', () => {
  let component: TrashUsersComponent;
  let fixture: ComponentFixture<TrashUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
