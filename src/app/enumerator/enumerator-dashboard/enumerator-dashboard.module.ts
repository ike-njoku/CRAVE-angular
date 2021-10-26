import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumeratorDashboardRoutingModule } from './enumerator-dashboard-routing.module';
import { EnumeratorDashboardComponent } from './enumerator-dashboard.component';
import { EnumeratorDashboardHeaderModule } from './enumerator-dashboard-header/enumerator-dashboard-header.module';


@NgModule({
  declarations: [
    EnumeratorDashboardComponent
  ],
  imports: [
    CommonModule,
    EnumeratorDashboardRoutingModule,
    EnumeratorDashboardHeaderModule
  ]
})
export class EnumeratorDashboardModule { }
