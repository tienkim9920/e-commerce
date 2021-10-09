import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  links = [
    {name: 'Hồ sơ', path: '/user/profile'},
    {name: 'Thay đổi mật khẩu', path: '/user/profile/changepassword'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
