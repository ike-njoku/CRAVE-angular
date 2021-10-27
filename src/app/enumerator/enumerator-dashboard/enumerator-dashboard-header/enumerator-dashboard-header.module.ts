import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratorDashboardHeaderComponent } from './enumerator-dashboard-header/enumerator-dashboard-header.component';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { DashboardService } from 'src/app/shared-services/dashboard.service';



@NgModule({
  declarations: [
    EnumeratorDashboardHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthenticationService,
    DashboardService
  ],
  exports: [EnumeratorDashboardHeaderComponent]
})
export class EnumeratorDashboardHeaderModule { }
