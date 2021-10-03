import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexHeaderRoutingModule } from './index-header-routing.module';
import { IndexHeaderComponent } from './index-header.component';


@NgModule({
  declarations: [
    IndexHeaderComponent
  ],
  imports: [
    CommonModule,
    IndexHeaderRoutingModule,
  ],
  exports: [IndexHeaderComponent]
})
export class IndexHeaderModule { }
