import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import ThamSo from 'src/app/pattern/ThamSo';
import Ticket from 'src/app/pattern/Ticket';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('lucky', { read: ElementRef }) lucky!: ElementRef<any>;

  user = new User('')

  thamSo = new ThamSo()

  number: any = 0

  index: any

  spin: any = 2

  showToast: any = false

  messToast: any = ''

  // Mảng này dùng để lưu trữ Tick và vị trí
  arrayTick: any

  constructor(private cartService: CartService) {
    this.user._id = cartService.getUserId()

    // ThamSo get Tick
    this.thamSo.getListTick()

    if (!this.user._id){
      return
    }

    // GET observe user
    this.user.getDetail()
    this.user.getTickets()

  }

  ngOnInit() {
    window.scroll(0, 0)

    setTimeout(() => {
      if (this.user.score >= 500){
        this.spin = 1
      }

      this.arrayTick = this.thamSo.listTick.concat(this.thamSo.listTick[0])
    }, 400)

  }

  startLucky(){

    this.spin = 2

    // Random number
    this.number = Math.ceil(Math.random() * (6480 - 3240) + 3240);
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

    // Kiểm tra vị trí
    const checkIndex = duVong - (duVitri * 45)

    // Xoay
    this.lucky.nativeElement.style.transition = "10s";
    this.lucky.nativeElement.style.transform = "rotate(-" + this.number + "deg)";

    let audio = new Audio();
    audio.src = "../../assets/audio.mp3";
    audio.load();
    audio.play();

    if (checkIndex > 22.5){

      setTimeout(() => {

        // Trừ Score
        this.user.score = this.user.score - 500
        this.user.PATCH_SCORE()

        // Thêm Ticket mới
        const ticket = new Ticket('', this.user._id, this.arrayTick[duVitri + 1]._id, false)
        this.user.postTicket(ticket)

        // Hiển thị Toast
        this.messToast = `Bạn đã nhận được Ticket ${this.arrayTick[duVitri + 1].name}.`
        this.spin = 0
        this.showToast = true

      }, 10000)

      setTimeout(() => {
        this.showToast = false
      }, 14000)

    }else{

      setTimeout(() => {

        // Trừ Score
        this.user.score = this.user.score - 500
        this.user.PATCH_SCORE()

        // Thêm Ticket mới
        const ticket = new Ticket('', this.user._id, this.arrayTick[duVitri]._id, false)
        this.user.postTicket(ticket)

        // Hiển thị Toast
        this.messToast = `Bạn đã nhận được Ticket ${this.arrayTick[duVitri].name}.`
        this.spin = 0
        this.showToast = true

      }, 10000)

      setTimeout(() => {
        this.showToast = false
      }, 14000)

    }

  }

  resetLucky(){
    this.number = 0
    this.lucky.nativeElement.style.transform = "rotate(" + this.number + "deg)";
    this.lucky.nativeElement.style.transition = "0s";
    if (this.user.score >= 500){
      this.spin = 1
    }else{
      this.spin = 2
    }
  }

}
