import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Checking from 'src/app/pattern/Checking';
import Message from 'src/app/pattern/Message';
import Product from 'src/app/pattern/Product';
import Room from 'src/app/pattern/Room';
import { CartService } from '../../cart.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  showToast: boolean = false

  toastMessage: boolean = false

  id: any

  size: any = 'M'

  count: any = 1

  like: any = false

  index = 0

  product = new Product('', '', '', '', '', '', [], '', '', '', '')

  message: string = ''

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) {
    setTimeout(() => {
      this.product.getDetailProduct(this.route.snapshot.paramMap.get('id'))
      this.product.getCommentProduct()
    }, 1000)
  }


  ngOnInit(): void {
    window.scroll(0,0)
  }

  changeSize(value: any){
    this.size = value
  }

  changeImage(index: any){
    this.index = index
  }

  statusLike(){
    this.like = !this.like
  }

  addCart(){
    this.showToast = true

    const data = {
      cartId: Math.random().toString(),
      productId: this.product._id,
      shopId: this.product.shopId,
      name: this.product.name,
      image: this.product.image[0],
      price: this.product.price - ((this.product.price * this.product.discount) / 100),
      size: this.size,
      count: this.count
    }

    this.cartService.addProduct(data)
    this.cartService.TotalPayment()

    setTimeout(() => {
      this.showToast = false
    }, 3000)
  }

  async handlerSendMessage(){
    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
      return
    }

    const room = new Room('', this.cartService.getClientId(), this.product.shopId._id, '')
    
    const checking = await room.checkingRoom()
    
    // Kiểm tra xem đã có phòng chat hay chưa
    if (!checking){ // Nếu chưa

      // POST api checking
      const notice = new Checking('', 1, 0)
      const noticeRoom = await notice.POST_CHECKING()

      room.checkingId = noticeRoom._id
      const roomId = await room.POST_ROOM() // tạo phòng chat

      const messenger = new Message(this.cartService.getClientId(), roomId._id, this.message)
      await messenger.POST_MESSAGE()
      this.message = ''
      this.ToastMessage()

      return
    }

    // Cập nhật checking
    const notice = new Checking(checking.checkingId, 0, 0)
    await notice.PATCH_CHECKING('client')

    // Thêm message
    const messenger = new Message(this.cartService.getClientId(), checking._id, this.message)
    await messenger.POST_MESSAGE()
    this.message = ''
    this.ToastMessage()

  }

  ToastMessage(){
    this.toastMessage = true
    setTimeout(() => {
      this.toastMessage = false
    }, 3000)
  }


}
