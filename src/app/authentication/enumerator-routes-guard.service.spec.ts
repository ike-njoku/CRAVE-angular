import { TestBed } from '@angular/core/testing';

import { EnumeratorRoutesGuardService } from './enumerator-routes-guard.service';

describe('EnumeratorRoutesGuardService', () => {
  let service: EnumeratorRoutesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumeratorRoutesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
