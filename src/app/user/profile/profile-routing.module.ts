import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: '',component: ProfileComponent, loadChildren: () => import('./index/index.module').then(m => m.IndexModule) },
  { path: 'changepassword',component: ProfileComponent, loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
