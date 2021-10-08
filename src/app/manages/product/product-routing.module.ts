import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
     path: '', component: ProductComponent
  },
  {
    path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule)
  },
  {
    path: 'add', component: AddComponent
  },
  {
    path: 'category', component: CategoryComponent
  },
  {
    path: 'addcategory', component: AddcategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
