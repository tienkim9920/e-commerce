import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ManagesRoutingModule } from './manages-routing.module';
import { ManagesComponent } from './manages.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    ManagesComponent,
    MessageComponent,
  ],
  imports: [
    CommonModule,
    ManagesRoutingModule,
    FormsModule
  ]
})
export class ManagesModule { }
