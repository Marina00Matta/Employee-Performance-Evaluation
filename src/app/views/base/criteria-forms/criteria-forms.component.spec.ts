import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriaFormsComponent } from './criteria-forms.component';

describe('CriteriaFormsComponent', () => {
  let component: CriteriaFormsComponent;
  let fixture: ComponentFixture<CriteriaFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriteriaFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriteriaFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
