import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  toastSuccess: boolean = false

  toastFail: boolean = false

  // Giỏ hàng của bạn
  myCarts: any

  // Giỏ hàng của bạn bè
  anotherCarts: any
  
  // Tổng thanh toán
  totalPayment: any

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getLocalStorage()
  }

  handlerUpdate(productId: any){

    // Lấy value từ input
    let count = (document.getElementById(productId) as HTMLInputElement).value;

    if (parseInt(count) < 0 || parseInt(count) > 20){
      this.toastFail = true

      setTimeout(() => {
        this.toastFail = false
      }, 3000)

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

    setTimeout(() => {
      this.toastSuccess = false
    }, 3000)
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

    setTimeout(() => {
      this.toastSuccess = false
    }, 3000)

  }

  getLocalStorage(){
    this.myCarts = this.cartService.getMyCarts()
    this.anotherCarts = this.cartService.getAnotherCarts()
    this.totalPayment = this.cartService.getTotalPayment()
  }


  handlerOrder(){
    window.location.href = '/checkout/map'
  }

}
