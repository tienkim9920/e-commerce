import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InformationComponent } from './information/information.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {
    path: '', 
    component: IndexComponent, 
    children: [
      { path: 'map', component: MapComponent },
      { path: 'information', component: InformationComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
