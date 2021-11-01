import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailOrderRoutingModule } from './detail-order-routing.module';
import { DetailOrderComponent } from './detail-order.component';


@NgModule({
  declarations: [
    DetailOrderComponent
  ],
  imports: [
    CommonModule,
    DetailOrderRoutingModule
  ]
})
export class DetailOrderModule { }
