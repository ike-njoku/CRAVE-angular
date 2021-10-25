import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumeratorComponent } from './enumerator.component';

const routes: Routes = [{ path: '', component: EnumeratorComponent }, { path: 'create', loadChildren: () => import('./create-enumerator/create-enumerator.module').then(m => m.CreateEnumeratorModule) }, { path: 'sign-in', loadChildren: () => import('./enumerator-sign-in/enumerator-sign-in.module').then(m => m.EnumeratorSignInModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnumeratorRoutingModule { }
