import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'detail', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'lucky', loadChildren: () => import('./lucky/lucky.module').then(m => m.LuckyModule)
  },
  {
    path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  {
    path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule)
  },
  {
    path: 'shop', loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'chat', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'manages', loadChildren: () => import('./manages/manages.module').then(m => m.ManagesModule)
  },
  {
    path: 'newfeed', loadChildren: () => import('./newfeed/newfeed.module').then(m => m.NewfeedModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'forgetpassword', loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'product', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'composite', loadChildren: () => import('./composite/composite.module').then(m => m.CompositeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
