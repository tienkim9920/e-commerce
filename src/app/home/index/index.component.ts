import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Comment from 'src/app/pattern/Comment';
import Coupon from 'src/app/pattern/Coupon';
import Order from 'src/app/pattern/Order';
import Product from 'src/app/pattern/Product';
import ThamSo from 'src/app/pattern/ThamSo';
import Ticket from 'src/app/pattern/Ticket';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  statusTicket: Boolean = false

  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent!: ElementRef<any>;

  scroll: any = true

  thamSo = new ThamSo()

  listDiscount: any = []

  page: Number = 1

  constructor() {

  }

  ngOnInit() {
    this.thamSo.getDiscountProduct()
    this.thamSo.getListCategory()
    this.thamSo.getHomeProduct(this.page)
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
