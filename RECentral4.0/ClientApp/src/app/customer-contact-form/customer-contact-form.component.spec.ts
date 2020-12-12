import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactFormComponent } from './customer-contact-form.component';

describe('CustomerContactFormComponent', () => {
  let component: CustomerContactFormComponent;
  let fixture: ComponentFixture<CustomerContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
