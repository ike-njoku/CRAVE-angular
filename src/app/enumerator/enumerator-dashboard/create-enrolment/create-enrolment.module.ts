import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEnrolmentRoutingModule } from './create-enrolment-routing.module';
import { CreateEnrolmentComponent } from './create-enrolment.component';
import { UtilityService } from 'src/app/shared-services/utility.service';


@NgModule({
  declarations: [
    CreateEnrolmentComponent
  ],
  imports: [
    CommonModule,
    CreateEnrolmentRoutingModule
  ],
  providers: [UtilityService]
})
export class CreateEnrolmentModule { }
