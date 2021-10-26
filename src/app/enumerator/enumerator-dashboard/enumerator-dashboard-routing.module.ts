import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumeratorDashboardComponent } from './enumerator-dashboard.component';

const routes: Routes = [{ path: '', component: EnumeratorDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnumeratorDashboardRoutingModule { }
