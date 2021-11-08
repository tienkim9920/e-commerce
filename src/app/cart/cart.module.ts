import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';
import { ShareComponent } from './share/share.component';


@NgModule({
  declarations: [
    IndexComponent,
    SettingComponent,
    ShareComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    FormsModule
  ]
})
export class CartModule { }
