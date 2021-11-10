import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardIndexRoutingModule } from './dashboard-index-routing.module';
import { DashboardIndexComponent } from './dashboard-index.component';
import { CreateClientModule } from '../create-client/create-client.module';


@NgModule({
  declarations: [
    DashboardIndexComponent
  ],
  imports: [
    CommonModule,
    DashboardIndexRoutingModule,
    CreateClientModule
  ]
})
export class DashboardIndexModule { }
