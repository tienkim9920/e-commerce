import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild('scrollbottom', { read: ElementRef }) scrollBottom!: ElementRef<any>;

  message: any

  listMessage: any = [
    { message: 'Hé lô', category: 'send'},
    { message: 'Hé lô', category: 'receive'},
    { message: 'Hé lô', category: 'send'},
    { message: 'Hé lô', category: 'receive'},
    { message: 'Hé lô', category: 'send'},
    { message: 'Hé lô', category: 'receive'},
    { message: 'Hé lô', category: 'send'},
  ]

  constructor() { }

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

  onEnter(){
    this.sendMessage()
  }

}
