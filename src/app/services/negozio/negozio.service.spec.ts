import { TestBed } from '@angular/core/testing';

import { NegozioService } from './negozio.service';

describe('NegozioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NegozioService = TestBed.get(NegozioService);
    expect(service).toBeTruthy();
  });
});
