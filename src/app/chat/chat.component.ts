import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Checking from '../pattern/Checking';
import Client from '../pattern/Client';
import Message from '../pattern/Message';
import Room from '../pattern/Room';
import socket from '../socket/socket';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollbottom', { read: ElementRef }) scrollBottom!: ElementRef<any>;

  message: any

  client = new Client(JSON.parse(localStorage.getItem('jwt')!).subjectId, "", "", "", "")

  room = new Room('', '', '', '')

  shop: any = {}

  loading: boolean = false

  constructor() {
    // Get list user online
    this.getUserOnline()

    setTimeout(() => {
      this.client.getRoom()
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

    const messenger = new Message(this.client._id, this.room._id, this.message)
    await this.room.postMessageRoom(messenger)

    setTimeout(() => {
      this.scrollToBottom()  
    }, 300)

    socket.emit('sendMessage', messenger)

    this.message = ''
    // setTimeout(() => {
    //   this.typingMessage()
    // }, 100)


    // Cập nhật checking
    const notice = new Checking(this.room.checkingId, 0, 0)
    await notice.PATCH_CHECKING('client')    

  }

  async activeShop(item: any, roomId: any, checkingId: any, index: any){

    // Thay đổi checking
    const checking = new Checking(checkingId, 0, 0)
    await checking.PATCH_CHECKING_NOTICE()

    // Thay đổi checking trong class
    this.client.room[index].checkingId.noticeClient = 0
    this.client.room[index].checkingId.noticeShop = 0    

    this.shop = item.shopId
    this.shop.active = item.active
    this.room._id = roomId
    this.room.checkingId = checkingId
    this.room.getMessageByRoom()
    
    // Tham gia
    socket.emit('joinChat', roomId)

    setTimeout(() => {
      this.scrollToBottom()
    }, 500)
  }

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
        for (let i = 0; i < this.client.room.length; i++) {
          for (let j = 0; j < data.length; j++) {
              if (this.client.room[i].shopId.userId.toString() === data[j]._id.toString()) {
                this.client.room[i].active = true
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
