import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyloadedComponent } from './lazyloaded.component';

describe('LazyloadedComponent', () => {
  let component: LazyloadedComponent;
  let fixture: ComponentFixture<LazyloadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyloadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyloadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
