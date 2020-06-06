import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorFormsComponent } from './indicator-forms.component';

describe('IndicatorFormsComponent', () => {
  let component: IndicatorFormsComponent;
  let fixture: ComponentFixture<IndicatorFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
