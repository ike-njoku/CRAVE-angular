import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeratorDashboardComponent } from './enumerator-dashboard.component';

describe('EnumeratorDashboardComponent', () => {
  let component: EnumeratorDashboardComponent;
  let fixture: ComponentFixture<EnumeratorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumeratorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumeratorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
