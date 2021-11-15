import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  links = [
    {
      name: 'Hồ sơ', path: '/user/profile'
    },
    {
      name: 'Thay đổi mật khẩu', path: '/user/profile/changepassword'
    },
    {
      name: 'Giỏ hàng chia sẻ', path: '/user/profile/client'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
