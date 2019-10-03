import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAccordionComponent } from './child-accordion.component';

describe('ChildAccordionComponent', () => {
  let component: ChildAccordionComponent;
  let fixture: ComponentFixture<ChildAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
