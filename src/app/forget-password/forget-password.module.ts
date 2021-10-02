import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';;
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordComponent } from './forget-password.component';


@NgModule({
  declarations: [
    ForgetPasswordComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule,
    CommonModule,
    ForgetPasswordRoutingModule
  ]
})
export class ForgetPasswordModule { }
