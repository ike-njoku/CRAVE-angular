import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClientRoutingModule } from './create-client-routing.module';
import { CreateClientComponent } from './create-client.component';


@NgModule({
  declarations: [
    CreateClientComponent
  ],
  imports: [
    CommonModule,
    CreateClientRoutingModule
  ],
  exports: [CreateClientComponent]
})
export class CreateClientModule { }
