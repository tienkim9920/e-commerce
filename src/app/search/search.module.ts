import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'
import {MatCheckboxModule} from '@angular/material/checkbox';;
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';;
import {MatInputModule} from '@angular/material/input';
import ListProductComponent from '../list-product/list-product.component';
import { PaginationComponent } from '../pagination/pagination.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    SearchComponent,
    ListProductComponent,
    PaginationComponent
  ],
  imports: [
    FormsModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
