import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Checking from 'src/app/pattern/Checking';
import Message from 'src/app/pattern/Message';
import Room from 'src/app/pattern/Room';
import Shop from 'src/app/pattern/Shop';
import socket from 'src/app/socket/socket';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('scrollbottom', { read: ElementRef }) scrollBottom!: ElementRef<any>;

  message: any

  loading: boolean = false

  shop = new Shop(JSON.parse(localStorage.getItem('jwt')!).subjectId, "", "", "", "", 0, '', '')

  room = new Room('', '', '', '')

  client: any = {}

  constructor() {
    // Get list user online
    this.getUserOnline()
    
    setTimeout(() => {
      this.shop.getRoom()
    }, 1000) 
  }

  ngOnInit(){
  }

  ngDoCheck(){
    // Get list user online
    this.onUserOnline()
  }

  ngAfterContentChecked(){
    this.receiveMessage()

    // this.receiveTyping()
  }

  scrollToBottom() {
    this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;              
  }

  async sendMessage(){

    const messenger = new Message(this.shop._id, this.room._id, this.message)
    await this.room.postMessageRoom(messenger)

    setTimeout(() => {
      this.scrollToBottom()
    }, 200)

    socket.emit('sendMessage', messenger)

    this.message = ''
    // this.typingMessage()

    // Cập nhật checking
    const notice = new Checking(this.room.checkingId, 0, 0)
    await notice.PATCH_CHECKING('shop')        
  }

  // Hàm active đối tượng cần chat
  async activeClient(item: any, roomId: any, checkingId: any, index: any){

    // Thay đổi checking
    const checking = new Checking(checkingId, 0, 0)
    await checking.PATCH_CHECKING_NOTICE()    

    // Thay đổi checking trong class
    this.shop.room[index].checkingId.noticeClient = 0
    this.shop.room[index].checkingId.noticeShop = 0

    // Thay đổi checking trong class
    this.client = item.clientId.userId
    this.client.active = item.active // cập nhật active cho đối tượng
    this.room._id = roomId
    this.room.checkingId = checkingId
    this.room.getMessageByRoom()

    // Tham gia
    socket.emit('joinChat', roomId)

    setTimeout(() => {
      this.scrollToBottom()
    }, 500)
  }

  // Hàm nhận socket gửi tin nhắn
  receiveMessage(){
    socket.on('sendMessage', async (data: any) => {
      
      this.room.message = await [...this.room.message, data]

      setTimeout(async () => {
        await this.scrollToBottom()
      }, 2000)
    })
  }  

  // Hàm socket nhận bàn phím
  // receiveTyping(){
  //   socket.on('typing', (data: any) => {
  //     if (data.message && this.loading === true) {
  //       return
  //     }
  //     if (!data.message) {
  //       this.loading = false
  //       return
  //     }
  //     if (data.message && this.loading === false) {
  //       this.loading = true
  //       setTimeout(() => {
  //         this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
  //       }, 300)
  //     }
  //   })
  // }  

  // typingMessage(){
  //   const data = {
  //     roomId: this.room._id,
  //     message: this.message
  //   }

  //   socket.emit('typing', data)
  // }

  getUserOnline(){
    socket.emit('getOnline')
  }

  onUserOnline(){
    // Nhận socket và lọc xem user nào online
    socket.on('getOnline', (data: any) => {
      setTimeout(() => {
        for (let i = 0; i < this.shop.room.length; i++) {
          for (let j = 0; j < data.length; j++) {
              if (this.shop.room[i].clientId.userId._id.toString() === data[j]._id.toString()) {
                this.shop.room[i].active = true
              }
          }
        }
      }, 3000)
    })
  }

  onEnter(){
    if (!this.message){
      return
    }

    this.sendMessage()
  }

}
