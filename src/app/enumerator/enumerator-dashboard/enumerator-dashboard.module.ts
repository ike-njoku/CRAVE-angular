import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumeratorDashboardRoutingModule } from './enumerator-dashboard-routing.module';
import { EnumeratorDashboardComponent } from './enumerator-dashboard.component';


@NgModule({
  declarations: [
    EnumeratorDashboardComponent
  ],
  imports: [
    CommonModule,
    EnumeratorDashboardRoutingModule
  ]
})
export class EnumeratorDashboardModule { }
