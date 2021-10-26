import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumeratorDashboardHeaderComponent } from './enumerator-dashboard-header.component';

describe('EnumeratorDashboardHeaderComponent', () => {
  let component: EnumeratorDashboardHeaderComponent;
  let fixture: ComponentFixture<EnumeratorDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumeratorDashboardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumeratorDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
