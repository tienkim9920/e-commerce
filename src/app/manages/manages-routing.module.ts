import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagesComponent } from './manages.component';
import { MessageComponent } from './message/message.component';

const routes: Routes = [
  {
    path: '',
    component: ManagesComponent,
    children: [
      {
        path: 'message' , component: MessageComponent
      }
    ]
  },

  { path: 'product', component: ManagesComponent , loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
  { path: 'order/:id', component: ManagesComponent , loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'setting', component: ManagesComponent , loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule) },
  { path: 'datacenter', component: ManagesComponent , loadChildren: () => import('./datacenter/datacenter.module').then(m => m.DatacenterModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagesRoutingModule { }
