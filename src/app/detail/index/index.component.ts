import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Checking from 'src/app/pattern/Checking';
import Comment from 'src/app/pattern/Comment';
import Like from 'src/app/pattern/Like';
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

  errorMessage: string = ''

  id: any

  size: any

  optionId: any

  count: any = 1

  like: any = null

  index = 0

  product = new Product('', '', '', '', '', '', [],'' , '', '', '')

  message: string = ''

  permission: string = ''

  textCommnent: string = ''

  starComment: number = 0

  stock: any = {}

  constructor(private route: ActivatedRoute, private cartService: CartService, private router: Router) {
    setTimeout(() => {
      this.product.getDetailProduct(this.route.snapshot.paramMap.get('id'))
      this.product.getCommentProduct(this.route.snapshot.paramMap.get('id'))
      this.product.getOptionProduct(this.route.snapshot.paramMap.get('id'))
    }, 700)

    setTimeout(async () => {
      this.like = await this.product.checkingUserLikeProduct(this.cartService.getUserId())
    }, 1500)

    this.permission = this.cartService.getPermission()
  }


  ngOnInit(): void {
    window.scroll(0,0)
  }

  changeSize(item: any){
    this.size = item.size
    this.optionId = item._id
    this.stock.count = item.count
    console.log(this.stock.count)

    if (item.count === 0){
      this.stock.status = true
      return
    }
    this.stock.status = false
  }

  changeImage(index: any){
    this.index = index
  }

  // POST API Like product
  statusLike(){
    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
      return
    }

    this.like = !this.like
    this.product.patchLike()

    const like = new Like('', this.product._id, this.cartService.getUserId())
    like.POST_LIKE()
  }

  // DELETE API Dislike product
  statusDisLike(){
    this.like = !this.like
    this.product.patchDislike()

    const like = new Like('', this.product._id, this.cartService.getUserId())
    like.DELETE_LIKE()
  }

  addCart(){

    // Ki???m tra ch???n size
    if (!this.size){
      this.errorMessage = 'Vui l??ng ch???n size cho s???n ph???m!'
      this.ToastMessage()
      return
    }

    // Ki???m tra s??? l?????ng t???n
    if (this.count > this.stock.count){
      this.errorMessage = 'S??? l?????ng s???n ph???m v?????t qu?? gi???i h???n!'
      this.ToastMessage()
      return
    }

    // Ki???m tra s??? l?????ng t???n ??? gi??? h??ng
    const checking = this.cartService.getMyCarts().some((element: any) => {
      return element.productId === this.product._id && element.size === this.size
        && element.count + this.count > this.stock.count
    })
    if (checking){
      this.errorMessage = 'S???n ph???m trong gi??? h??ng v?????t qu?? gi???i h???n!'
      this.ToastMessage()
      return
    }


    this.showToast = true

    const data = {
      cartId: Math.random().toString(),
      productId: this.product._id,
      shopId: this.product.shopId,
      name: this.product.name,
      image: this.product.image[0],
      price: this.product.price - ((this.product.price * this.product.discount) / 100),
      size: this.size,
      optionId: this.optionId,
      stock: this.stock.count,
      count: this.count
    }

    this.cartService.addProduct(data)
    this.cartService.TotalPayment()

    this.ToastMessage()
  }

  async handlerSendMessage(){
    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
      return
    }

    const room = new Room('', this.cartService.getSubjectId(), this.product.shopId._id, '')

    const checking = await room.checkingRoom()

    // Ki???m tra xem ???? c?? ph??ng chat hay ch??a
    if (!checking){ // N???u ch??a

      // POST api checking
      const notice = new Checking('', 1, 0)
      const noticeRoom = await notice.POST_CHECKING()

      room.checkingId = noticeRoom._id
      const roomId = await room.POST_ROOM() // t???o ph??ng chat

      const messenger = new Message(this.cartService.getSubjectId(), roomId._id, this.message)
      await messenger.POST_MESSAGE()
      this.message = ''

      this.toastMessage = true
      this.ToastMessage()

      return
    }

    // C???p nh???t checking
    const notice = new Checking(checking.checkingId, 0, 0)
    await notice.PATCH_CHECKING('client')

    // Th??m message
    const messenger = new Message(this.cartService.getSubjectId(), checking._id, this.message)
    await messenger.POST_MESSAGE()
    this.message = ''
    this.ToastMessage()

  }

  handlerComment(){

    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
      return
    }

    // C???p nh???t s??? l?????ng Comment
    this.product.patchCountComment()

    // Th??m Comment v??o list
    const comment = new Comment(this.product._id, this.cartService.getUserId(), this.starComment,
      this.textCommnent, `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`)

    this.product.postCommentProduct(comment)

  }

  ToastMessage(){
    setTimeout(() => {
      this.toastMessage = false
      this.errorMessage = ''
      this.showToast = false
    }, 3000)
  }


}
