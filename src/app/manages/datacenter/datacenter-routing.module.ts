import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { DatacenterComponent } from './datacenter.component';
import { StatisticComponent } from './statistic/statistic.component';

const routes: Routes = [
  {
    path: '',
    component: DatacenterComponent,
    children: [
      {
        path: 'coupon', component: CouponComponent
      },
      {
        path: 'statistic', component: StatisticComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatacenterRoutingModule { }
