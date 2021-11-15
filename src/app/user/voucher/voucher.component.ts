import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  links = [
    {
      name: 'Ticket', path: '/user/voucher/ticket'
    },
    {
      name: 'Coupon', path: '/user/voucher/coupon'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
