import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEnrolmentRoutingModule } from './create-enrolment-routing.module';
import { CreateEnrolmentComponent } from './create-enrolment.component';
import { UtilityService } from 'src/app/shared-services/utility.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';


@NgModule({
  declarations: [
    CreateEnrolmentComponent
  ],
  imports: [
    CommonModule,
    CreateEnrolmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule
  ],
  providers: [UtilityService]
})
export class CreateEnrolmentModule { }
