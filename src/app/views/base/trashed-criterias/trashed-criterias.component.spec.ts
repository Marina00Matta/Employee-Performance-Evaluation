import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashedCriteriasComponent } from './trashed-criterias.component';

describe('TrashedCriteriasComponent', () => {
  let component: TrashedCriteriasComponent;
  let fixture: ComponentFixture<TrashedCriteriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrashedCriteriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashedCriteriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
