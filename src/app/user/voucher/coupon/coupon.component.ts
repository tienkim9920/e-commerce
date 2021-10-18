import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  coupon: any = false

  constructor() { }

  ngOnInit(): void {
  }

  handlerFilter(value: any){
    this.coupon = value
  }

}
