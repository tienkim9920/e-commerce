import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';
import { SettingComponent } from './setting.component';

const routes: Routes = [
  {
    path: '', component: SettingComponent
  },
  {
    path: 'account', component: AccountComponent
  },
  {
    path: 'address', component: AddressComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'rating', component: RatingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
