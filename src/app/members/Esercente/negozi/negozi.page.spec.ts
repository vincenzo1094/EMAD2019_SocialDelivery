import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegoziPage } from './negozi.page';

describe('NegoziPage', () => {
  let component: NegoziPage;
  let fixture: ComponentFixture<NegoziPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegoziPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegoziPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
