import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Client from '../pattern/Client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  @ViewChild('scrollbottom', { read: ElementRef }) scrollBottom!: ElementRef<any>;

  message: any

  client = new Client(JSON.parse(localStorage.getItem('jwt')!).clientId, "", "", "", "")

  shop: any = {}

  listMessage: any = [
    { message: 'Hé lô', category: 'send'},
    { message: 'Hé lô', category: 'receive'},
    { message: 'Hé lô', category: 'send'},
    { message: 'Hé lô', category: 'receive'},
    { message: 'Hé lô', category: 'send'},
    { message: 'Hé lô', category: 'receive'},
    { message: 'Hé lô', category: 'send'},
  ]

  constructor() {
    this.client.getRoom()
  }

  ngOnInit(){
    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
  }

  scrollToBottom() {
    this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;              
  }

  sendMessage(){

    const data = {
      message: this.message,
      category: 'send'
    }

    const newMessages = this.listMessage
    newMessages.push(data)

    this.listMessage = newMessages

    setTimeout(() => {
      this.scrollToBottom()
    }, 10)

    this.message = ''
  }

  activeShop(item: any){
    this.shop = item
    console.log(this.shop)
  }

  onEnter(){
    this.sendMessage()
  }

}
