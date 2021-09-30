import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
<<<<<<< HEAD:src/app/manage/manage-routing.module.ts
  { path: 'manage', component: IndexComponent }
=======
  {
    path: 'detail/:id', component: IndexComponent
  },
>>>>>>> 600d4b91151d2ad208fc46befbf8948ba30d9fb7:src/app/detail/detail-routing.module.ts
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
