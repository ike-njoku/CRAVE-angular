import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnrolmentComponent } from './create-enrolment.component';

describe('CreateEnrolmentComponent', () => {
  let component: CreateEnrolmentComponent;
  let fixture: ComponentFixture<CreateEnrolmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnrolmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
