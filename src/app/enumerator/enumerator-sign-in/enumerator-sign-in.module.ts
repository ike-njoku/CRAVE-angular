import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumeratorSignInRoutingModule } from './enumerator-sign-in-routing.module';
import { EnumeratorSignInComponent } from './enumerator-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from 'src/app/authentication/authentication.module';


@NgModule({
  declarations: [
    EnumeratorSignInComponent
  ],
  imports: [
    CommonModule,
    EnumeratorSignInRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationModule
  ]
})
export class EnumeratorSignInModule { }
