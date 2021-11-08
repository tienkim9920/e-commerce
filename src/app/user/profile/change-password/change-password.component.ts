import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import * as bcrypt from 'bcryptjs';
import API from 'src/app/http/http';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  error: any;
  http: HttpClient;
  inforAPI: any;
  constructor(http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
  }
  async onSubmit(data: any){
    this.inforAPI=""
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(JSON.parse(localStorage.getItem('jwt')!).jwt);
    console.log(decodedToken)

    const isValid = await this.validateAll(data,decodedToken);
    if (!isValid) return

    const body={
      id:decodedToken.user._id,
      newPassword: data.newPassword,
    }
    this.http.post<any>(API.POST_CHANGE_PASSWORD(), body).subscribe(data => {
      this.inforAPI=data.msg
    })
  }

  async validateAll(data:any,decodedToken:any){
    var msg:any = {}
    const auth = await bcrypt.compare(data.password, decodedToken.user.password)
    if (data.password==="") {
        msg.password = "Mật khẩu không được để trống"
    }else if(!auth) {
      msg.password = "Mật khẩu cũ không đúng"
    }
    if (data.newPassword==="") {
      msg.newPassword = "Mật khẩu mới không được để trống"
    }
    if (data.confirmPassword!==data.newPassword) {
        msg.confirm = "Xác nhận mật khẩu sai"
    }
    this.error=msg
    console.log(Object.keys(msg).length)
    if (Object.keys(msg).length > 0) return false;
    return true;
  }
}
