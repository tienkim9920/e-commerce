import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',

  styleUrls: ['./voucher.component.css']
})
export class VoucherComponent implements OnInit {
  links = [
    {name: 'Hồ sơ', path: '/user/voucher'},
    {name: 'Thay đổi mật khẩu', path: '/user/profile/changepassword'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
