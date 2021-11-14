import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { AddressComponent } from './address/address.component';
import { MapComponent } from './map/map.component';


@NgModule({
  declarations: [
    ShopComponent,
    AddressComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ]
})
export class ShopModule { }
