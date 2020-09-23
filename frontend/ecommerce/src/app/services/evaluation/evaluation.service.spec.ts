import { TestBed } from '@angular/core/testing';

import { EvaluationService } from './evaluation.service';

describe('ProductService', () => {
  let service: EvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
