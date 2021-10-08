import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    ManagesRoutingModule
  ]
})
export class ManagesModule { }
