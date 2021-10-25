import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnumeratorSignInComponent } from './enumerator-sign-in.component';

const routes: Routes = [{ path: '', component: EnumeratorSignInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnumeratorSignInRoutingModule { }
