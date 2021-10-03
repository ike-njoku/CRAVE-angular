import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexHeaderComponent } from './index-header.component';

const routes: Routes = [{ path: '', component: IndexHeaderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexHeaderRoutingModule { }
