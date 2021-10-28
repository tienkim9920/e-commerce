import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Tick from 'src/app/pattern/Tick';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user = new User('')

  toastSuccess: boolean = false

  toastFail: boolean = false

  toastCoupon: boolean = false

  toastPromotion: boolean = false

  // Giỏ hàng của bạn
  myCarts: any

  // Giỏ hàng của bạn bè
  anotherCarts: any
  
  // Tổng thanh toán
  totalPayment: any

  // ticket
  ticket: any
  activeTick: any

  // coupon
  coupon: any
  code: string = ''

  constructor(private cartService: CartService) {
    this.user._id = cartService.getUserId()

    this.user.getTickets()
  }

  ngOnInit(): void {
    this.getLocalStorage()
  }

  handlerUpdate(productId: any){

    // Lấy value từ input
    let count = (document.getElementById(productId) as HTMLInputElement).value;

    if (parseInt(count) < 0 || parseInt(count) > 20){
      this.toastFail = true
      this.Toast()
      return
    }

    const data = {
      productId,
      count
    }

    // Thực hiện cập nhật giỏ hàng
    this.cartService.updateProduct(data)
    this.cartService.TotalPayment()
    this.totalPayment = this.cartService.getTotalPayment()

    this.toastSuccess = true
    this.Toast()
  }

  handlerDelete(index: any){
    
    // Thực hiện xóa giỏ hàng
    this.cartService.deleteProduct(index)
    this.cartService.TotalPayment()
    this.totalPayment = this.cartService.getTotalPayment()

    const newCarts = this.myCarts

    newCarts.splice(index, 1)

    this.myCarts = newCarts

    this.toastSuccess = true
    this.Toast()
  }

  getLocalStorage(){
    this.myCarts = this.cartService.getMyCarts()
    this.anotherCarts = this.cartService.getAnotherCarts()
    this.totalPayment = this.cartService.getTotalPayment()
    this.ticket = this.cartService.getTicket()
    this.coupon = this.cartService.getCoupon()
  }

  handlerOrder(){
    window.location.href = '/checkout/map'
  }

  // Hàm apply ticket
  applyTicket(){
    if (this.user.ticket[this.activeTick].status){
      return
    }

    const newTicket = this.user.ticket[this.activeTick]
    this.ticket = newTicket
    this.cartService.setTicket(newTicket)
    this.totalPayment = this.cartService.getTotalPayment()

    this.toastPromotion = true
    this.Toast()
  }

  // Hàm hủy ticket
  cancelTicket(){
    this.cartService.unTicket(this.ticket)
    this.totalPayment = this.cartService.getTotalPayment()
    this.ticket = {}
  }

  // Hàm apply coupon
  async applyCoupon(){
    const checking = await this.user.checkingCoupon(this.code)

    // Kiểm tra xem coup này có thỏa mãn hay không
    if (!checking || this.totalPayment.total < checking.limit){
      this.toastCoupon = true
      this.Toast()
      return
    }

    this.coupon = checking
    this.cartService.setCoupon(checking)
    this.totalPayment = this.cartService.getTotalPayment()

    this.toastPromotion = true
    this.Toast()
  }

  Toast(){
    setTimeout(() => {
      this.toastPromotion = false
      this.toastSuccess = false
      this.toastFail = false
      this.toastCoupon = false
    }, 3000)
  }

  // Hàm active ticket
  handlerActiveTick(index: any){
    this.activeTick = index
  }

}
