import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EnumeratorRoutingModule } from './enumerator-routing.module';
import { EnumeratorComponent } from './enumerator.component';


@NgModule({
  declarations: [
    EnumeratorComponent
  ],
  imports: [
    CommonModule,
    EnumeratorRoutingModule,
    HttpClientModule,
  ]
})
export class EnumeratorModule { }
