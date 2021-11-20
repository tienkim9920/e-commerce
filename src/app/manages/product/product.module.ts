import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ProductComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
  ]
})
export class ProductModule { }
