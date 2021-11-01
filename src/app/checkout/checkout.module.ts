import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/map.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [
    IndexComponent,
    MapComponent,
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
