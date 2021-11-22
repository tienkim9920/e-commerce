
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import Tick from 'src/app/pattern/Tick';
import User from 'src/app/pattern/User';
import socket from 'src/app/socket/socket';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user = new User('')

  // Thông tin share giỏ hàng
  anotherRoom: any

  toastSuccess: boolean = false

  toastFail: boolean = false

  toastCoupon: boolean = false

  toastPromotion: boolean = false

  toastVerifyAnother: boolean = false

  toastErrorVerify: boolean = false

  errorMessage: boolean = false

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

  constructor(private cartService: CartService, private router: Router) {
    this.user._id = cartService.getUserId()

    this.user.getTickets()

    this.anotherRoom = this.cartService.getAnotherRoom()
  }

  ngOnInit(): void {
    this.getLocalStorage()
  }

  ngDoCheck(){
    this.receiveCartAnother()
    this.totalPayment = this.cartService.getTotalPayment()
  }

  async handlerUpdate(cartId: any){

    // Lấy value từ input
    let count = (document.getElementById(cartId) as HTMLInputElement).value;

    if (parseInt(count) < 0 || parseInt(count) > 20){
      this.toastFail = true
      this.Toast()
      return
    }

    const data = {
      cartId,
      count
    }

    // Thực hiện cập nhật giỏ hàng
    this.cartService.updateProduct(data)
    this.totalPayment = this.cartService.getTotalPayment()

    // Thực Thi
    await this.alwayCheckingCoupon()

    this.toastSuccess = true
    this.Toast()

  }

  async handlerDelete(index: any){

    // Thực hiện xóa giỏ hàng
    this.cartService.deleteProduct(index)
    this.totalPayment = this.cartService.getTotalPayment()

    const newCarts = this.myCarts

    newCarts.splice(index, 1)

    this.myCarts = newCarts

    this.toastSuccess = true
    this.Toast()

    // Thực Thi
    await this.alwayCheckingCoupon()

  }

  async handlerDeleteAnother(index: any){
    // Thực hiện xóa giỏ hàng
    this.cartService.deleteProductAnother(index)
    this.totalPayment = this.cartService.getTotalPayment()

    const newCarts = this.anotherCarts

    newCarts.splice(index, 1)

    this.anotherCarts = newCarts

    this.toastSuccess = true
    this.Toast()

    // Thực Thi
    await this.alwayCheckingCoupon()
  }

  // Luôn luôn kiểm tra trạng thái có thỏa mãn để đáp ứng sử dụng coupon
  alwayCheckingCoupon(){
    if (this.coupon){
      this.coupon.forEach(async (element: any) => {
        const checking = await this.checkingCoupon(element.code)

        if (!checking){
          await this.cancelCoupon(element._id)
        }
      });
    }
  }

  getLocalStorage(){
    this.myCarts = this.cartService.getMyCarts()
    this.anotherCarts = this.cartService.getAnotherCarts()
    this.totalPayment = this.cartService.getTotalPayment()
    this.ticket = this.cartService.getTicket()
    this.coupon = this.cartService.getCoupon()
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

    if (!this.code){
      return
    }

    // Kiểm tra xem thử code này đã được áp dụng chưa
    const existCoupon = this.coupon.some((element: any) => {
      return element.code === this.code
    })

    if (existCoupon){ // nếu đã áp dụng rồi thì k áp dụng lại được
      this.toastCoupon = true
      this.Toast()
      return
    }

    // Kiểm tra xem thử đã đăng nhập chưa
    if (!this.checkingLogin()){
      this.router.navigate(['/login'])
      return
    }

    const checking = await this.checkingCoupon(this.code)

    // Kiểm tra xem coup này có thỏa mãn hay không
    if (checking){
      this.coupon = [...this.coupon, checking]
      this.cartService.setCoupon(this.coupon)
      this.totalPayment = this.cartService.getTotalPayment()

      this.toastPromotion = true
      this.Toast()
      return
    }

    this.toastCoupon = true
    this.Toast()

  }

  // Hủy Coupon
  cancelCoupon(_id: any){
    // Tìm vị trí của coupon cần xóa
    const indexCoupon = this.coupon.findIndex((element: any) => {
      return element._id === _id
    })

    // Xóa tại localstorage
    this.cartService.unCoupon(this.coupon[indexCoupon], indexCoupon)
    this.totalPayment = this.cartService.getTotalPayment()

    // Xóa tại coupon
    this.coupon.splice(indexCoupon, 1)
  }

  Toast(){
    setTimeout(() => {
      this.toastPromotion = false
      this.toastSuccess = false
      this.toastFail = false
      this.toastCoupon = false
      this.toastVerifyAnother = false
      this.toastErrorVerify = false
      this.errorMessage = false
    }, 3000)
  }

  checkingProductShop(checking: any){
    let totalShop = 0

    this.cartService.getMyCarts().forEach((element: any) => {
      if (element.shopId._id === checking.shopId){
        totalShop += element.price * element.count
      }
    });

    this.cartService.getAnotherCarts().forEach((element: any) => {
      if (element.shopId._id === checking.shopId){
        totalShop += element.price * element.count
      }
    });

    return totalShop
  }

  // Hàm kiểm tra sản phẩm trong giỏ hàng có phải của shop
  checkingDiscountShop(checking: any){

    const discount = this.myCarts.some((element: any) => {
      return element.shopId._id === checking.shopId
    })

    const discountAnother = this.anotherCarts.some((element: any) => {
      return element.shopId._id === checking.shopId
    })

    if (!discount && !discountAnother){
      return false
    }

    return true
  }


  // Hàm kiểm tra trạng thái coupon sau mỗi lần thay đổi
  async checkingCoupon(code: any){
    const checking = await this.user.checkingCoupon(code)
    if (!checking){
      return false
    }

    // Kiểm tra xem những sản phẩm mà khách hàng mua của shop có thỏa mãn với limit hay k
    const totalShop = this.checkingProductShop(checking)
    console.log(totalShop)

    // Kiểm tra xem có phải sản phẩm của shop không
    const discount = this.checkingDiscountShop(checking)
    console.log(discount)


    // Kiểm tra xem coup này có thỏa mãn hay không
    if (totalShop < checking.limit || !discount){
      return false
    }

    return checking
  }


  // Hàm active ticket
  handlerActiveTick(index: any){
    this.activeTick = index
  }

  handlerOrder(){

    // Kiểm tra số lượng tồn của sản phẩm
    const checkingStockMyCart = this.cartService.getMyCarts().some((element: any) => {
      return element.count > element.stock
    })
    if (checkingStockMyCart){
      this.errorMessage = true
      this.Toast()
      return
    }

    if (this.myCarts.length < 1){

      if (this.anotherCarts.length > 0){
        this.router.navigate(['/checkout'])
      }

      return
    }

    if (!this.checkingLogin()){
      this.router.navigate(['/login'])
      return
    }

    this.router.navigate(['/checkout'])
  }

  checkingLogin(){
    const userId = this.cartService.getUserId()

    if (!userId){
      return false
    }

    return true
  }

  // Hàm này dùng để kiểm tra trạng thái của giỏ hàng chia sẽ
  checkingCartShare(){
    if (!this.checkingLogin()){
      this.router.navigate(['/login'])
      return
    }

    if (this.cartService.getPermission() !== 'client'){
      return
    }

    this.router.navigate(['/cart/setting'])
  }

  // Hàm này dùng để xác nhận giao dịch
  verifyCartAnother(){

    // Kiểm tra số lượng tồn của sản phẩm
    const checkingStockMyCart = this.cartService.getMyCarts().some((element: any) => {
      return element.count > element.stock
    })
    if (checkingStockMyCart){
      this.errorMessage = true
      this.Toast()
      return
    }    

    let cartSocket: any = []

    let totalBill = 0

    // Tính điều kiện giới hạn số tiền giỏ hàng chia sẽ
    this.cartService.getMyCarts().forEach((element: any) => {
      totalBill += element.price * element.count

      element.userId = this.anotherRoom.userId
      element.fullname = this.anotherRoom.fullname
      cartSocket.push(element)
    })

    if (totalBill > this.anotherRoom.limit){
      this.toastErrorVerify = true
      this.Toast()
      return
    }

    const data = {
      room: this.anotherRoom.code,
      cart: cartSocket,
      userId: this.anotherRoom.userId
    }

    console.log(data)

    socket.emit('verifyCart', data)

    this.toastVerifyAnother = true
    this.Toast()
  }

  receiveCartAnother(){
    socket.on('verifyCart', async (data: any) => {

      // Lọc ra những giỏ hàng khác với người đã gửi socket
      const newFilter = this.cartService.getAnotherCarts().filter((element: any) => {
        return element.userId.toString() !== data.userId.toString()
      })

      this.anotherCarts = newFilter.concat(data.cart)
      this.cartService.setAnotherCart(this.anotherCarts)
      this.cartService.TotalPayment()

      // Thực Thi
      await this.alwayCheckingCoupon()

    })
  }

}
