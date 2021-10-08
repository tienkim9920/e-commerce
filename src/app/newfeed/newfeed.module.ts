import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewfeedRoutingModule } from './newfeed-routing.module';
import { NewfeedComponent } from './newfeed.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    NewfeedComponent
  ],
  imports: [
    CommonModule,
    NewfeedRoutingModule,
    InfiniteScrollModule
  ]
})
export class NewfeedModule { }
