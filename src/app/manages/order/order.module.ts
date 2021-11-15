import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { AllComponent } from './all/all.component';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';



@NgModule({
  declarations: [
    OrderComponent,
    AllComponent

  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTabsModule,
    PaginationModule,
  ]
})
export class OrderModule { }
