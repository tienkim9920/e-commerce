import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Coupon from 'src/app/pattern/Coupon';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  filterOrder: any=[
    {title:"Tất cả",status:"0"},
    {title:"Chưa sử dụng",status:"1",checked:false},
    {title:"Đã sử dụng",status:"2",checked:true},
  ]

  filter:any={query:this.filterOrder[0] , search:""}

  user = new User(JSON.parse(localStorage.getItem('jwt')!).userId)

  coupon=Array<Coupon>();

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    await this.user.getCoupons();
    this.route.queryParams.subscribe(params => {
      params.status? this.filter.status = params.status : this.filter.query = this.filterOrder[0];
      params.search? this.filter.search = params.search : this.filter.search="";
      this.refreshOrder()
    });
  }

  refreshOrder() {
    let {status,checked}= this.filter.query
    let search= this.filter.search

    let coupons=this.user.coupon.filter((result: any) => {
      if(status!=0){
        return result.status==checked
      }
      return result
    })

    coupons=coupons.filter((result: any) => {
      return result._id.indexOf(search)!==-1
    })
    this.coupon=coupons

  }

}
