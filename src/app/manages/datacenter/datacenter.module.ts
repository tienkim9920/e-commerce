import { DatacenterComponent } from './datacenter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatacenterRoutingModule } from './datacenter-routing.module';
import { StatisticComponent } from './statistic/statistic.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddcouponComponent } from './addcoupon/addcoupon.component';


@NgModule({
  declarations: [
    DatacenterComponent,
    StatisticComponent,
    CouponComponent,
    AddcouponComponent
  ],
  imports: [
    CommonModule,
    DatacenterRoutingModule
  ]
})
export class DatacenterModule { }
