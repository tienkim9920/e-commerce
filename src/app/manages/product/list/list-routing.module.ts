import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { HiddensaleComponent } from './hiddensale/hiddensale.component';
import { ListComponent } from './list.component';
import { OffsaleComponent } from './offsale/offsale.component';
import { OnsaleComponent } from './onsale/onsale.component';
import { OutsaleComponent } from './outsale/outsale.component';


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    children: [
      {
        path: 'onsale', component: OnsaleComponent
      },
      {
        path: 'all', component: AllComponent
      },
      {
        path: 'offsale', component: OffsaleComponent
      },
      {
        path: 'outsale', component: OutsaleComponent
      },
      {
        path: 'hiddensale', component: HiddensaleComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
