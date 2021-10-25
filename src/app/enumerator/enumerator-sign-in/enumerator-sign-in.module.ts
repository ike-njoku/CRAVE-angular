import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumeratorSignInRoutingModule } from './enumerator-sign-in-routing.module';
import { EnumeratorSignInComponent } from './enumerator-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EnumeratorSignInComponent
  ],
  imports: [
    CommonModule,
    EnumeratorSignInRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EnumeratorSignInModule { }
