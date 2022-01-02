import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import Shop from 'src/app/pattern/Shop';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./order.component.css']

})
export class OrderComponent implements OnInit {
  links = [
    {
      name: 'Tất cả', path: '/manages/order/0'
    },
    {
      name: 'Đang xử lý', path: '/manages/order/1'
    },
    {
      name: 'Đã xác nhận', path: '/manages/order/2'
    },
    {
      name: 'Đang giao', path: '/manages/order/3'
    },
    {
      name: 'Đã giao', path: '/manages/order/4'
    },
    {
      name: 'Đã hủy', path: '/manages/order/5'
    },
  ];

  shop=new Shop("","","","","",0,"","");
  orderLength:Number = 0;
  filter:any = { page: 1, pageSize: 4, search: "", status: "0"}
  params:any;
  status:boolean = false;



  constructor(private route: ActivatedRoute) {
    combineLatest([this.route.params, this.route.queryParams]).subscribe(async ([params, queryParams]) => {
      this.setFilter(params,queryParams)
      await this.shop.getOrderShop(JSON.parse(localStorage.getItem('jwt')!).userId,this.filter)
      this.status=true
     });
  }

  ngOnInit(): void {
    console.log(this.shop.order)
  }

  setFilter(params:any, queryParams: any){
    queryParams.page ? this.filter.page = queryParams.page : this.filter.page=1;
    // queryParams.keyWord? this.filter.keyWord=queryParams.keyWord:this.filter.keyWord=""
    this.filter.status= params.id || "0"
    this.params= params.id || "0"
  }


}
