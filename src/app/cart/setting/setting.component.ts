import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  status: boolean = false

  constructor() { }

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
    this.status = !this.status
    console.log(this.status)
  }
  
}
