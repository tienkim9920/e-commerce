import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { QueryModule } from 'src/app/shared/query/query.module';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    PaginationModule,
    QueryModule,
  ]

})
export class IndexModule { }
