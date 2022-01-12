import { Component, OnInit } from '@angular/core';
import Client from 'src/app/pattern/Client';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  success: Boolean = false
  client= new Client(JSON.parse(localStorage.getItem('jwt')!).subjectId, 
    JSON.parse(localStorage.getItem('jwt')!).userId, "", "", "");
    
  linkShare: string = ''

  constructor() {
    this.client.getDetailClient();

    setTimeout(() => {
      this.linkShare = `https://tthshop.netlify.app/cart/share/${this.client.code}`
    }, 500)
  }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  changeStatus(){
    this.success = true
    this.client.statusOrder = !this.client.statusOrder
    this.client.PATCH_STATUS()
    setTimeout(() => {
      this.success = false
    }, 3000)
  }
  
}
