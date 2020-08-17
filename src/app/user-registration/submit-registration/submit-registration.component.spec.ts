import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitRegistrationComponent } from './submit-registration.component';

describe('SubmitRegistrationComponent', () => {
  let component: SubmitRegistrationComponent;
  let fixture: ComponentFixture<SubmitRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
