import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { IndexComponent } from './index/index.component';
import { MapComponent } from './map/map.component';
import { InformationComponent } from './information/information.component';


@NgModule({
  declarations: [
    IndexComponent,
    MapComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
