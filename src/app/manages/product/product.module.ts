import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddComponent } from './add/add.component';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';


@NgModule({
  declarations: [
    ProductComponent,
    AddComponent,
    CategoryComponent,
    AddcategoryComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
