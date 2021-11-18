import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import Checking from '../pattern/Checking';
import Message from '../pattern/Message';
import Reputation from '../pattern/Reputation';
import Room from '../pattern/Room';
import Shop from '../pattern/Shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '')

  message: any = ''

  permission: any

  toastMessage: boolean = false

  reputation: any

  page: number = 1

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) {
    this.shop._id = this.route.snapshot.paramMap.get('id')
    setTimeout(async () => {
      this.shop.getDetailShop()
      this.shop.getListCoup()
      this.shop.getReputation(this.shop._id)
      this.shop.getPaginationShop(this.page)

      this.reputation = await this.shop.checkingReputation(this.cartService.getUserId())
    }, 1000)

    this.permission = this.cartService.getPermission()
  }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

  async handlerSendMessage(){
    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
      return
    }

    const room = new Room('', this.cartService.getSubjectId(), this.shop._id, '')
    
    const checking = await room.checkingRoom()
    
    // Kiểm tra xem đã có phòng chat hay chưa
    if (!checking){ // Nếu chưa

      // POST api checking
      const notice = new Checking('', 1, 0)
      const noticeRoom = await notice.POST_CHECKING()

      room.checkingId = noticeRoom._id
      const roomId = await room.POST_ROOM() // tạo phòng chat

      const messenger = new Message(this.cartService.getSubjectId(), roomId._id, this.message)
      await messenger.POST_MESSAGE()
      this.message = ''

      this.toastMessage = true
      this.ToastMessage()

      return
    }
  }

  handlerReputation(){
    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
      return
    }

    this.reputation = !this.reputation
    const reputation = new Reputation('', this.cartService.getUserId(), this.shop._id)
    this.shop.postRepuation(reputation)
  }

  handlerDisReputation(){
    this.reputation = !this.reputation
    const reputation = new Reputation('', this.cartService.getUserId(), this.shop._id)
    this.shop.deleteReputation(reputation)
  }

  handlerChangePage(){
    this.page += 1
    this.shop.getPaginationShop(this.page)
  }

  ToastMessage(){
    setTimeout(() => {
      this.toastMessage = false
    }, 3000)
  }
    

}
