import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompositeComponent } from './composite.component';

const routes: Routes = [{ path: '', component: CompositeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompositeRoutingModule { }
