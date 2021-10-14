import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnumeratorComponent } from './create-enumerator.component';

const routes: Routes = [{ path: '', component: CreateEnumeratorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEnumeratorRoutingModule { }
