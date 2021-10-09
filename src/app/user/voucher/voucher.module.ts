import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherComponent } from './voucher.component';

import { ListVoucherComponent } from './list-voucher/list-voucher.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    VoucherComponent,
    ListVoucherComponent
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
