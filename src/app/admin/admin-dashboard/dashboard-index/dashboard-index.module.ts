import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardIndexRoutingModule } from './dashboard-index-routing.module';
import { DashboardIndexComponent } from './dashboard-index.component';


@NgModule({
  declarations: [
    DashboardIndexComponent
  ],
  imports: [
    CommonModule,
    DashboardIndexRoutingModule
  ]
})
export class DashboardIndexModule { }
