import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    setTimeout(() => {
      this.client.getRoom()
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

  }

  activeShop(item: any, roomId: any){
    this.shop = item
    this.room._id = roomId
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

  onEnter(){
    if (!this.message){
      return
    }

    this.sendMessage()
  }

}
