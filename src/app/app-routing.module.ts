import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo:'index', pathMatch: 'full'},
  { path: 'index', loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'enumerator', loadChildren: () => import('./enumerator/enumerator.module').then(m => m.EnumeratorModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
