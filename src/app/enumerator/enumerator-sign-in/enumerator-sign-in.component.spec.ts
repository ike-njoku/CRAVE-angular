import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeratorSignInComponent } from './enumerator-sign-in.component';

describe('EnumeratorSignInComponent', () => {
  let component: EnumeratorSignInComponent;
  let fixture: ComponentFixture<EnumeratorSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumeratorSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumeratorSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
