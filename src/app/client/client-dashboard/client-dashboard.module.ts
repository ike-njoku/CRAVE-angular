import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';
import { ClientDashboardComponent } from './client-dashboard.component';


@NgModule({
  declarations: [
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    ClientDashboardRoutingModule
  ]
})
export class ClientDashboardModule { }
