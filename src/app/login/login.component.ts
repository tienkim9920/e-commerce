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
    
    const token = await this.user.signInUser()

    if (!token){
      this.error = true
      return
    }

    token.expiredTime = Date.now() + 600000

    this.cartService.setJWT(token)
    this.router.navigate(['/'])
    
  }

}
