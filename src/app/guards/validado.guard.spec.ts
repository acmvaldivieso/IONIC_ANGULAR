import { TestBed } from '@angular/core/testing';

import { ValidadoGuard } from './validado.guard';

describe('ValidadoGuard', () => {
  let guard: ValidadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
