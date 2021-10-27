import { TestBed } from '@angular/core/testing';

import { EnumeratorRoutesGuard } from './enumerator-routes.guard';

describe('EnumeratorRoutesGuard', () => {
  let guard: EnumeratorRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnumeratorRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
