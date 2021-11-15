import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { IndexComponent } from './index/index.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    IndexComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    NgxPayPalModule,
    FormsModule
  ]
})
export class CheckoutModule { }
