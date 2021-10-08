import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  { 
    path: '', 
    component: IndexComponent
  },
  {
    path: 'setting', component: SettingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
