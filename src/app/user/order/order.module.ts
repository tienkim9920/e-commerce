import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AllComponent } from './all/all.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    OrderComponent,
    AllComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
