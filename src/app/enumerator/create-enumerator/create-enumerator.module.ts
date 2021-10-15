import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEnumeratorRoutingModule } from './create-enumerator-routing.module';
import { CreateEnumeratorComponent } from './create-enumerator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumeratorService } from './enumerator.service';


@NgModule({
  declarations: [
    CreateEnumeratorComponent
  ],
  imports: [
    CommonModule,
    CreateEnumeratorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EnumeratorService
  ]
})
export class CreateEnumeratorModule { }
