import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  { 
    path: '', component: OrderComponent, children: [
      { path: 'all', component: AllComponent },
      { path: 'detail/:id', component: DetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
