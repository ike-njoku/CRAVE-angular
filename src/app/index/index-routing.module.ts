import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'index-header', loadChildren: () => import('./index-header/index-header.module').then(m => m.IndexHeaderModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
