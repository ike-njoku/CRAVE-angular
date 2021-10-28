import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEnrolmentComponent } from './create-enrolment.component';

const routes: Routes = [{ path: '', component: CreateEnrolmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEnrolmentRoutingModule { }
