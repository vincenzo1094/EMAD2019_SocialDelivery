import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottiPage } from './prodotti.page';

describe('ProdottiPage', () => {
  let component: ProdottiPage;
  let fixture: ComponentFixture<ProdottiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdottiPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
