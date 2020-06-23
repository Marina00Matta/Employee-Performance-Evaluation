import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPositionFormComponent } from './edit-position-form.component';

describe('EditPositionFormComponent', () => {
  let component: EditPositionFormComponent;
  let fixture: ComponentFixture<EditPositionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPositionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPositionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
