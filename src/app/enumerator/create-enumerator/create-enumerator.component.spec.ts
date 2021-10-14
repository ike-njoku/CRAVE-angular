import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnumeratorComponent } from './create-enumerator.component';

describe('CreateEnumeratorComponent', () => {
  let component: CreateEnumeratorComponent;
  let fixture: ComponentFixture<CreateEnumeratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnumeratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnumeratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
