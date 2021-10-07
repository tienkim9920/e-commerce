import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewfeedComponent } from './newfeed.component';

const routes: Routes = [{ path: '', component: NewfeedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewfeedRoutingModule { }
