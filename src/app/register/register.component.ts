import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import API from '../http/http';
import User from '../pattern/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  auth: any = []

  user = new User('')

  permission: any = 'client'

  success: Boolean = false

  regex: Boolean = false

  error: Boolean = false

  debounce: Boolean = true

  constructor() { }

  ngOnInit(): void {
    this.getAuth()
  }

  changePermission(value: any) {
    this.user.authId = value

    this.auth.forEach((element: any) => {
      if (value === element._id){
        this.permission = element.auth
      }
    });

  }

  async handlerSignUp(){

    this.debounce = false

    // Kiểm tra định dạng email
    if (!this.validateEmail(this.user.email)){
      this.regex = true
      return
    }

    this.regex = false
    this.user.score = 0
    this.user.image = ''
    const checking = await this.user.signUpUser(this.permission)

    // Kiểm tra email đã tồn tại hay chưa
    if (!checking){
      this.error = true
      return
    }

    this.user.resetUser()
    this.success = true
    this.error = false
    this.debounce = true
  }

  async getAuth() {
    const res = await fetch(API.GET_AUTH())
    const data = await res.json()
    const newFilter = data.filter((value: any) => {
      return value.auth !== 'admin'
    })
    this.auth = newFilter
    this.user.authId = newFilter[0]._id
  }

  validateEmail(email: any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

}
