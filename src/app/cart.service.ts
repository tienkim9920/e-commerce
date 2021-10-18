import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  // function get toàn bộ giỏ hàng của mình
  getMyCarts(){

    let result = []

    if (localStorage.getItem('carts') !== null) {
        result = JSON.parse(localStorage.getItem('carts') || '[]')
    } else {
        localStorage.setItem('carts', JSON.stringify([]))
    }

    return result
  }

  // function get toàn bộ giỏ hàng của bạn bè
  getAnotherCarts(){

    let result = []

    if (localStorage.getItem('another') !== null) {
        result = JSON.parse(localStorage.getItem('another') || '[]')
    } else {
        localStorage.setItem('another', JSON.stringify([]))
    }

    return result
  }

  // function get totalPayment
  getTotalPayment(){

    let result = {}

    if (localStorage.getItem('totalPayment') !== null) {
        result = JSON.parse(localStorage.getItem('totalPayment') || '{}')
    } else {
        localStorage.setItem('totalPayment', JSON.stringify({}))
    }

    return result
  }

  // cập nhật total payment
  TotalPayment(){

    let totalPayment = JSON.parse(localStorage.getItem('totalPayment') || '{}')
    let myCarts = JSON.parse(localStorage.getItem('carts') || '[]')
    let anotherCarts = JSON.parse(localStorage.getItem('another') || '[]')

    const total = this.loopPrice(myCarts) + this.loopPrice(anotherCarts)

    const newData = {
        total,
        coupon: totalPayment.coupon,
        ticket: totalPayment.ticket,
        payment: this.getDiscountCoupon(total, totalPayment.coupon, totalPayment.ticket)
    }

    localStorage.setItem('totalPayment', JSON.stringify(newData))
  }

  // Giảm giá || chưa làm xong
  getDiscountCoupon(total: any, coupon: any, ticket: any){

    let result = total

    if (coupon){
        console.log(coupon)
    }

    if (ticket){
        console.log(ticket)
    }

    return result
  }

  discountCoupon(payment: any, coupon: any){

  }

  discountTicket(payment: any, ticket: any){

  }

  // Vòng for để cộng price tổng tiền
  loopPrice(carts: any){
    let result = 0

    carts.forEach((element: any) => {
      result += parseInt(element.price) * parseInt(element.count)
    });

    return result
  }

  addProduct(data: any) {
    //Lấy dữ liệu từ local
    const data_add_cart = data

    //Lấy dữ liệu có sẵn trong state

    let add_cart: any = JSON.parse(localStorage.getItem('carts') || '[]')

    console.log(add_cart.length)
    console.log(data_add_cart)

    if (add_cart.length < 1) {

        add_cart.push(data_add_cart)

        localStorage.setItem('carts', JSON.stringify(add_cart))

    } else {           

        //Tìm xem thử sản phẩm này đã mua hay chưa
        const findCart = add_cart.find((value: any) => {
            return value.productId === data_add_cart.productId
        })

        let flag = false

        //Nếu này chưa được mua thì mình push vào
        //Còn đã từng mua rồi thì mình update tại vị trí indexCart mà mình vừa tìm được
        if (!findCart) {
            add_cart.push(data_add_cart)
            
            localStorage.setItem('carts', JSON.stringify(add_cart))
        } else {
            for (let i = 0; i < add_cart.length; i++) {
                if (add_cart[i].productId === data_add_cart.productId) {
                    if (add_cart[i].size === data_add_cart.size) {
                        add_cart[i].count = parseInt(add_cart[i].count) + parseInt(data_add_cart.count)
                        flag = true
                        console.log("Update")

                        localStorage.setItem('carts', JSON.stringify(add_cart))
                    }
                }
            }

            if (!flag) {
                add_cart.push(data_add_cart)
                console.log("Push")

                localStorage.setItem('carts', JSON.stringify(add_cart))
            }
        }
    }
  }

  deleteProduct (index: any) {
      //Lấy dữ diệu có sẵn trong state
      const delete_cart = JSON.parse(localStorage.getItem('carts') || '[]')

      //Xóa theo vị trí
      delete_cart.splice(index, 1)

      localStorage.setItem('carts', JSON.stringify(delete_cart))
  }

  updateProduct(data: any) {
      const data_update_cart = data
          
      const update_cart = JSON.parse(localStorage.getItem('carts') || '[]')

      const index = update_cart.findIndex((value: any) => {
          return value.productId === data_update_cart.productId
      })

      update_cart[index].count = parseInt(data_update_cart.count)

      localStorage.setItem('carts', JSON.stringify(update_cart))
  }

}
