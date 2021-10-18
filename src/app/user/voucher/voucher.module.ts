import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherComponent } from './voucher.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketComponent } from './ticket/ticket.component';
import { CouponComponent } from './coupon/coupon.component';


@NgModule({
  declarations: [
    VoucherComponent,
    TicketComponent,
    CouponComponent
  ],
  imports: [
    CommonModule,
    VoucherRoutingModule,
    MatTabsModule,
    MatCardModule,
    NgbModule
  ]
})
export class VoucherModule { }
