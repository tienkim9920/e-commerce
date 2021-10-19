import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { 
    path: 'profile', component: UserComponent, loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) 
  },
  { 
    path: 'order',component: UserComponent, loadChildren: () => import('./order/order.module').then(m => m.OrderModule) 
  },
  { 
    path: 'voucher',component: UserComponent, loadChildren: () => import('./voucher/voucher.module').then(m => m.VoucherModule) 
  },
  { 
    path: 'notification',component: UserComponent, loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
