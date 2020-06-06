import { TestBed } from '@angular/core/testing';

import { EvaluationCycleService } from './EvaluationCycle.service';

describe('EvaluationCycleService', () => {
  let service: EvaluationCycleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationCycleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
