import { TestBed } from '@angular/core/testing';

import { ProdottoService } from './prodotto.service';

describe('ProdottoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdottoService = TestBed.get(ProdottoService);
    expect(service).toBeTruthy();
  });
});
