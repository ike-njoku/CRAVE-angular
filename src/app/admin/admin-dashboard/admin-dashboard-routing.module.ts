import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent, children: [
    { path: 'home', loadChildren: () => import('./dashboard-index/dashboard-index.module').then(m => m.DashboardIndexModule) }
  ] },
  { path: 'create-client', loadChildren: () => import('./create-client/create-client.module').then(m => m.CreateClientModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
