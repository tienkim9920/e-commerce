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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
