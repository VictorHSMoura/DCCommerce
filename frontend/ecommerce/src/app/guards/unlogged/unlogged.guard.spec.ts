import { TestBed } from '@angular/core/testing';

import { UnloggedGuard } from './unlogged.guard';

describe('UnloggedGuard', () => {
  let guard: UnloggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnloggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
