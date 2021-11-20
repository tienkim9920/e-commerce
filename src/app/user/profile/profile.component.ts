import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  permission: any = JSON.parse(localStorage.getItem('jwt')!).permission

  constructor() { }

  ngOnInit(): void {
  }

}
