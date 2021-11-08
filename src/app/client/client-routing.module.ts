import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent }, { path: 'dashboard', loadChildren: () => import('./client-dashboard/client-dashboard.module').then(m => m.ClientDashboardModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
