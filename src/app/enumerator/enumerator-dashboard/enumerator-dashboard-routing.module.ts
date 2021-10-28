import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumeratorDashboardComponent } from './enumerator-dashboard.component';

const routes: Routes = [
  { path: '', component: EnumeratorDashboardComponent, children: [
    { path: 'enrolments/new', loadChildren: () => import('./create-enrolment/create-enrolment.module').then(m => m.CreateEnrolmentModule) }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnumeratorDashboardRoutingModule { }
