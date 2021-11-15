import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list'
import {MatCheckboxModule} from '@angular/material/checkbox';;
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';;
import {MatInputModule} from '@angular/material/input';
import ListProductComponent from '../list-product/list-product.component';
import { PaginationModule } from '../shared/pagination/pagination.module';


@NgModule({
  declarations: [
    SearchComponent,
    ListProductComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatSliderModule,
    MatInputModule,
    MatCheckboxModule,
    MatListModule,
    CommonModule,
    SearchRoutingModule,
    PaginationModule,
  ]
})
export class SearchModule { }
