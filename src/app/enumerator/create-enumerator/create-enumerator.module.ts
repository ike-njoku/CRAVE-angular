import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateEnumeratorRoutingModule } from './create-enumerator-routing.module';
import { CreateEnumeratorComponent } from './create-enumerator.component';


@NgModule({
  declarations: [
    CreateEnumeratorComponent
  ],
  imports: [
    CommonModule,
    CreateEnumeratorRoutingModule
  ]
})
export class CreateEnumeratorModule { }
