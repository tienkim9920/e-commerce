import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { TicketComponent } from './ticket/ticket.component';
import { VoucherComponent } from './voucher.component';

const routes: Routes = [
  { 
    path: '', component: VoucherComponent, children: [
      { path: 'ticket', component: TicketComponent },
      { path: 'coupon', component: CouponComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoucherRoutingModule { }
