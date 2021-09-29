import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('lucky', { read: ElementRef }) lucky!: ElementRef<any>;

  number: any = 0

  index: any

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  startLucky(){

    // Random number
    this.number = Math.ceil(Math.random() * (6480 - 2160) + 2160);
    console.log(this.number)

    // Số vòng chia lấy phần nguyên
    const vong = (this.number - this.number % 360) / 360
    console.log(vong)

    // Số dư của vòng
    const duVong = this.number - (vong * 360)
    console.log(duVong)

    // Số dư để kiểm tra vị trí
    const duVitri = (duVong - duVong % 45) / 45
    console.log(duVitri)
    
    const checkIndex = duVong - (duVitri * 45)

    this.lucky.nativeElement.style.transform = "rotate(-" + this.number + "deg)";

    if (checkIndex > 22.5){

      setTimeout(() => {
        console.log(duVitri + 2)
        this.number = 0
      }, 5000)

    }else{

      setTimeout(() => {
        console.log(duVitri + 1)
        this.number = 0
      }, 5000)
      
    }

  }

}
