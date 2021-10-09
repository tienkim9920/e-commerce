import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  links = ['Tất cả', 'Chờ xác nhận', 'Chờ lấy hàng','Đang giao','Hoàn tất', 'Đã hủy'];
  constructor() { }

  ngOnInit(): void {
  }

}
