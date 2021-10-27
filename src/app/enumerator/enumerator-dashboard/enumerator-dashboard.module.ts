import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumeratorDashboardRoutingModule } from './enumerator-dashboard-routing.module';
import { EnumeratorDashboardComponent } from './enumerator-dashboard.component';
import { EnumeratorDashboardHeaderModule } from './enumerator-dashboard-header/enumerator-dashboard-header.module';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { DashboardService } from 'src/app/shared-services/dashboard.service';


@NgModule({
  declarations: [
    EnumeratorDashboardComponent
  ],
  providers: [
    AuthenticationService,
    DashboardService
  ],
  imports: [
    CommonModule,
    EnumeratorDashboardRoutingModule,
    EnumeratorDashboardHeaderModule,
  ],
})
export class EnumeratorDashboardModule { }
