import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Coupon from 'src/app/pattern/Coupon';
import Ticket from 'src/app/pattern/Ticket';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent!: ElementRef<any>;

  scroll: any = true

  user = new User('6162b4fa77e2a8176e6619a5')

  constructor() {

  }

  ngOnInit() {
    this.user.getTickets()
    this.user.getCoupons()
    this.user.getDetail()
  }

  handlerTicket(){
    const ticket = new Ticket('6162b4fa77e2a8176e6619a5', '5225', true)
    this.user.postTicket(ticket)
  }

  handlerCoupon(){
    const coupon = new Coupon('6162b4fa77e2a8176e6619a5', '12312321', true)
    this.user.postCoupon(coupon)
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 1250), behavior: 'smooth' });
    this.scroll = !this.scroll
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 1250), behavior: 'smooth' });
    this.scroll = !this.scroll
  }



}
