import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  filterOrder: any=[
    {title:"Chưa sử dụng",status:"0"},
    {title:"Đã sử dụng",status:"1"},
  ]
  filter:any={query:this.filterOrder[0] , search:""}

  constructor() { }

  ngOnInit(): void {}

}
