import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnumeratorDashboardHeaderComponent } from './enumerator-dashboard-header/enumerator-dashboard-header.component';



@NgModule({
  declarations: [
    EnumeratorDashboardHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [EnumeratorDashboardHeaderComponent]
})
export class EnumeratorDashboardHeaderModule { }
