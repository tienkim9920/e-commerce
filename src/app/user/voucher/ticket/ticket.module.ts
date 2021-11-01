import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket.component';
import { QueryModule } from 'src/app/shared/query/query.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    QueryModule,
    MatCardModule,
  ]
})
export class TicketModule { }
