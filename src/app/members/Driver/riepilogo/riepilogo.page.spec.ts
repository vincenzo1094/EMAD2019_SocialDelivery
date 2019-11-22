import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoPage } from './riepilogo.page';

describe('RiepilogoPage', () => {
  let component: RiepilogoPage;
  let fixture: ComponentFixture<RiepilogoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiepilogoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiepilogoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
