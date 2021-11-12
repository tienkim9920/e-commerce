import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { MapComponent } from './map/map.component';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { 
    path: ':id', component: ShopComponent 
  },
  {
    path: 'address/:id', component: AddressComponent
  },
  {
    path: 'address/map/:id', component: MapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
