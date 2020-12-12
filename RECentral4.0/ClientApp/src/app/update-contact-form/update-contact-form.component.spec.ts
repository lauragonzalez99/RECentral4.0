import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactFormComponent } from './update-contact-form.component';

describe('UpdateContactFormComponent', () => {
  let component: UpdateContactFormComponent;
  let fixture: ComponentFixture<UpdateContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
