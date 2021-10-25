import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import User from '../pattern/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('')

  error: Boolean = false

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {

  }

  async handlerSignIn(){
    
    const checking = await this.user.signInUser()

    if (!checking){
      this.error = true
      return
    }

    const token = {
      userId: checking.userId,
      permission: checking.permission,
      name: checking.name,
      image: checking.image,
      jwt: checking.jwt,
      expiredTime: Date.now() + 600000
    }

    this.cartService.setJWT(token)
    this.router.navigate(['/'])
    
  }

}
