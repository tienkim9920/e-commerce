import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryModule } from 'src/app/shared/query/query.module';
import { MatCardModule } from '@angular/material/card';
import { CouponComponent } from './coupon.component';


@NgModule({
  declarations: [
    CouponComponent
  ],
  imports: [
    CommonModule,
    QueryModule,
    MatCardModule,
  ]
})
export class CouponModule { }
