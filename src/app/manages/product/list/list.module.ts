import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { OnsaleComponent } from './onsale/onsale.component';
import { AllComponent } from './all/all.component';
import { OutsaleComponent } from './outsale/outsale.component';
import { OffsaleComponent } from './offsale/offsale.component';
import { HiddensaleComponent } from './hiddensale/hiddensale.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    ListComponent,
    OnsaleComponent,
    AllComponent,
    OutsaleComponent,
    OffsaleComponent,
    HiddensaleComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
