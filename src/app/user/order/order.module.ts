import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    OrderComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    OrderRoutingModule,
  ]
})
export class OrderModule { }
