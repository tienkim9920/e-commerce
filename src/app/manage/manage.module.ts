import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD:src/app/manage/manage.module.ts

import { ManageRoutingModule } from './manage-routing.module';
=======
import { FormsModule } from '@angular/forms'
import { DetailRoutingModule } from './detail-routing.module';
>>>>>>> 600d4b91151d2ad208fc46befbf8948ba30d9fb7:src/app/detail/detail.module.ts
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD:src/app/manage/manage.module.ts
    ManageRoutingModule
=======
    DetailRoutingModule,
    FormsModule
>>>>>>> 600d4b91151d2ad208fc46befbf8948ba30d9fb7:src/app/detail/detail.module.ts
  ]
})
export class ManageModule { }
