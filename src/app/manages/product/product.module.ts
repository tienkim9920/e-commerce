import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { AddComponent } from './add/add.component';
<<<<<<< HEAD
import { EditComponent } from './edit/edit.component';
=======
>>>>>>> origin
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ProductComponent,
    AddComponent,
<<<<<<< HEAD
    EditComponent,
=======
>>>>>>> origin
    UpdateComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
  ]
})
export class ProductModule { }
