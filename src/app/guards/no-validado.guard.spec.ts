import { TestBed } from '@angular/core/testing';

import { NoValidadoGuard } from './no-validado.guard';

describe('NoValidadoGuard', () => {
  let guard: NoValidadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoValidadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
