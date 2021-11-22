import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    setTimeout(() => {
      this.shop.getRoom()
    }, 1000)
  }

  ngOnInit(){

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
  }

  // Hàm active đối tượng cần chat
  activeClient(item: any, roomId: any){
    this.client = item
    this.room._id = roomId
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

  onEnter(){
    if (!this.message){
      return
    }

    this.sendMessage()
  }

}
