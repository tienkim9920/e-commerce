import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LuckyRoutingModule } from './lucky-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    LuckyRoutingModule
  ]
})
export class LuckyModule { }
