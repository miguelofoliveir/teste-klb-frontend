import { TestBed } from '@angular/core/testing';

import { CombosService } from './combos.service';

describe('CombosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CombosService = TestBed.get(CombosService);
    expect(service).toBeTruthy();
  });
});
