import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)
  },
  {
    path: '', loadChildren: () => import('./lucky/lucky.module').then(m => m.LuckyModule)
  },
  {
    path: '', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutModule)
  },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: 'forgetpassword', loadChildren: () => import('./forget-password/forget-password.module').then(m => m.ForgetPasswordModule) },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
