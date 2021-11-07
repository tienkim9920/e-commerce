import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { SettingComponent } from './setting/setting.component';
import { ShareComponent } from './share/share.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { 
    path: '', 
    component: IndexComponent
  },
  {
    path: 'setting', 
    component: SettingComponent
  },
  {
    path: 'share/:code',
    component: ShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
