import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEnrolmentRoutingModule } from './create-enrolment-routing.module';
import { CreateEnrolmentComponent } from './create-enrolment.component';


@NgModule({
  declarations: [
    CreateEnrolmentComponent
  ],
  imports: [
    CommonModule,
    CreateEnrolmentRoutingModule
  ]
})
export class CreateEnrolmentModule { }
