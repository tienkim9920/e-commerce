import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: '', loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: '', loadChildren: () => import('./lucky/lucky.module').then(m => m.LuckyModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }