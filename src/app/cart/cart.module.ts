import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    IndexComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
