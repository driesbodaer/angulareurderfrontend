import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSearch2Component } from './item-search2.component';

describe('ItemSearch2Component', () => {
  let component: ItemSearch2Component;
  let fixture: ComponentFixture<ItemSearch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSearch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSearch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
