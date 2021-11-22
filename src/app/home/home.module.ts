import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
