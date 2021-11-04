import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Ticket from 'src/app/pattern/Ticket';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  filterOrder: any=[
    { title:"Tất cả", status: "0"},
    { title:"Chưa sử dụng", status:"1", checked: false},
    { title:"Đã sử dụng", status:"2", checked: true},
  ]

  filter:any={ query: this.filterOrder[0], search:""}

  user = new User(JSON.parse(localStorage.getItem('jwt')!).userId)

  ticket=Array<Ticket>();

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    await this.user.getTickets();
    this.route.queryParams.subscribe(params => {
      params.status ? this.filter.status = params.status : this.filter.query = this.filterOrder[0];
      params.search ? this.filter.search = params.search : this.filter.search="";
      this.refreshOrder()
    });
  }

  refreshOrder() {
    let { status,checked }= this.filter.query
    let search= this.filter.search

    let tickets=this.user.ticket.filter((result: any) => {
      if(status!=0){
        return result.status==checked
      }
      return result
    })

    tickets=tickets.filter((result: any) => {
      console.log(result.tickId.description)
      return result._id.indexOf(search)!==-1 || result.tickId.description.indexOf(search)!==-1

    })
    this.ticket=tickets
  }



}
