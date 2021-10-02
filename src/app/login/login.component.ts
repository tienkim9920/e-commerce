import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  hide = true;

  ngOnInit(): void {
    console.log(this.emailFormControl)
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
