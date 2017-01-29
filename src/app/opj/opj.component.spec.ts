/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpjComponent } from './opj.component';

describe('OpjComponent', () => {
  let component: OpjComponent;
  let fixture: ComponentFixture<OpjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
