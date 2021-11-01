import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherComponent } from './voucher.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketModule } from './ticket/ticket.module';
import { CouponModule } from './coupon/coupon.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    VoucherComponent
    ],
  imports: [
    CommonModule,
    VoucherRoutingModule,
    NgbModule,
    MatTabsModule,
    TicketModule,
    CouponModule,
  ]
})
export class VoucherModule { }
