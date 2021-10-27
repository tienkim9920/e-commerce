import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: NgForm){
    console.log(JSON.parse(localStorage.getItem('jwt')!).jwt)
    console.log(data)
  }
}
