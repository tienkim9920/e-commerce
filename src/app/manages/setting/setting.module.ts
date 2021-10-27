import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SettingRoutingModule } from './setting-routing.module';
import { AddressComponent } from './address/address.component';
import { AccountComponent } from './account/account.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';
import { SettingComponent } from './setting.component';


@NgModule({
  declarations: [
    AddressComponent,
    AccountComponent,
    ProfileComponent,
    RatingComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FormsModule
  ]
})
export class SettingModule { }
