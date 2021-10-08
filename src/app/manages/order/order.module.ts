import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';
import { PendingComponent } from './pending/pending.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CompletedComponent } from './completed/completed.component';
import { CancelComponent } from './cancel/cancel.component';



@NgModule({
  declarations: [
    OrderComponent,
    AllComponent,
    DetailComponent,
    PendingComponent,
    ShippingComponent,
    CompletedComponent,
    CancelComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
