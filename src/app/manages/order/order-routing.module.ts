import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';
import { PendingComponent } from './pending/pending.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CompletedComponent } from './completed/completed.component';
import { CancelComponent } from './cancel/cancel.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'all', component: AllComponent
      },
      {
        path: 'detail', component: DetailComponent
      },
      {
        path: 'pending', component: PendingComponent
      },
      {
        path: 'shipping', component: ShippingComponent
      },
      {
        path: 'completed', component: CompletedComponent
      },
      {
        path: 'cancel', component: CancelComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
