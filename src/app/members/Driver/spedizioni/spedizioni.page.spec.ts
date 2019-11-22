import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpedizioniPage } from './spedizioni.page';

describe('SpedizioniPage', () => {
  let component: SpedizioniPage;
  let fixture: ComponentFixture<SpedizioniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpedizioniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpedizioniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
