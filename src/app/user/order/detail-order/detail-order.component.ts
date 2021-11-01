import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Order from 'src/app/pattern/Order';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {
  order= new Order("","","","","","","","","")

  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe(paramsId => {
      this.order._id=paramsId.id
    });
   }

  ngOnInit(): void {
    this.order.getDetailOrder()
    this.order.getDetailByOrder()
  }

}
