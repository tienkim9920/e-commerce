import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Order from 'src/app/pattern/Order';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  filterOrder: any=[
    { title:"Tất cả đơn hàng", status:"0" },
    { title:"Đang xử lý", status:"1" },
    { title:"Đã xác nhận", status:"2" },
    { title:"Đang vận chuyển", status:"3" },
    { title:"Đã giao", status:"4" },
    { title:"Đã hủy", status:"5" },
  ]

  user = new User(JSON.parse(localStorage.getItem('jwt')!).userId)
  order=Array<Order>();
  orderLength:Number = 0;
  filter:any = { page: 1, pageSize: 6, query: this.filterOrder[0] , search: ""}
  orderPatch=new Order("","","","","","","","","")

  constructor(private route: ActivatedRoute) {}

  async ngOnInit():Promise<void> {
    await this.user.getOrderUser()
    this.route.queryParams.subscribe(params => {
      params.page ? this.filter.page = params.page : this.filter.page = 1;
      params.status ? this.filter.status = params.status : this.filter.query = this.filterOrder[0];
      params.search ? this.filter.search = params.search : this.filter.search="";
      this.refreshOrder()
    });
  }

  refreshOrder() {
    let start=(this.filter.page - 1) * this.filter.pageSize;
    let end = this.filter.page * this.filter.pageSize;
    let status = this.filter.query.status
    let search = this.filter.search

    let order=this.user.order.filter((result: any) => {
      if(status !== "0"){
        return result.status == status
      }
      return result
    })

    order=order.filter((result: any) => {
      return result._id.indexOf(search)!==-1
    })

    this.orderLength=order.length

    this.order=order.slice(start,end)
  }

  async updateStatusOrder(item:any,index:any,option:boolean){
    const query={
      option:option,
      status:item.status
    }
    const updateOrder=await this.orderPatch.PATCH_ORDER(item,query)
    console.log(updateOrder)
    this.order[index].status="5"
  }

}
