import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
   PaginationComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    NgbPaginationModule,
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
