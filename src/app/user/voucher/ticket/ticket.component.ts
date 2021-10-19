import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  ticket: any = false

  constructor() { }

  ngOnInit(): void {
  }

  handlerFilter(value: any){
    this.ticket = value
  }

}
