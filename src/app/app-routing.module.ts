import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)
  },
  {
    path: 'lucky', loadChildren: () => import('./lucky/lucky.module').then(m => m.LuckyModule)
  },
  {
    path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
