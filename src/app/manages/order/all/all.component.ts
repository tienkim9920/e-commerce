
import { Component, Input, OnInit } from '@angular/core';
import Order from 'src/app/pattern/Order';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @Input() params: any
  @Input()order:any = []
  @Input()orderLength:Number = 0;
  @Input()filter:any;

  orderPatch=new Order("","","","","","","","","");
  constructor() { }

  ngOnInit(){
    console.log(this.order)
  }

  async updateStatusOrder(item:any,index:any,option:boolean){
    const query={
      option:option,
      status:item.status,
      userId: item.userId._id
    }
    const updateOrder=await this.orderPatch.PATCH_ORDER(item,query)
    if(option){
      this.order[index].status= Number(this.order[index].status) +1
    }else{
      this.order[index].status="5"
    }
  }

}
