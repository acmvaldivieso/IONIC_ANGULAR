import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ValidadoGuard } from './validado.guard';

describe('ValidadoGuard', () => {
  let guard: ValidadoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(ValidadoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
