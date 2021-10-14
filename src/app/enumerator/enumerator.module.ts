import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumeratorRoutingModule } from './enumerator-routing.module';
import { EnumeratorComponent } from './enumerator.component';


@NgModule({
  declarations: [
    EnumeratorComponent
  ],
  imports: [
    CommonModule,
    EnumeratorRoutingModule
  ]
})
export class EnumeratorModule { }
