import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompositeRoutingModule } from './composite-routing.module';
import { CompositeComponent } from './composite.component';


@NgModule({
  declarations: [
    CompositeComponent
  ],
  imports: [
    CommonModule,
    CompositeRoutingModule,
    FormsModule
  ]
})
export class CompositeModule { }
