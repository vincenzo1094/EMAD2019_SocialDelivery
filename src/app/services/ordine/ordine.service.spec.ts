import { TestBed } from '@angular/core/testing';

import { OrdineService } from './ordine.service';

describe('OrdineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdineService = TestBed.get(OrdineService);
    expect(service).toBeTruthy();
  });
});
