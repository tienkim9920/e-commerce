import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { DetailRoutingModule } from './detail-routing.module';
import { IndexComponent } from './index/index.component';
import { SkeletonComponent } from './skeleton/skeleton.component';


@NgModule({
  declarations: [
    IndexComponent,
    SkeletonComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule,
    FormsModule
  ]
})
export class DetailModule { }
