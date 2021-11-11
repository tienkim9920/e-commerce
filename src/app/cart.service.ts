import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  constructor() { }

  // RESET
  resetLocalStorage(){
    localStorage.setItem('carts', JSON.stringify([]))
    localStorage.setItem('another', JSON.stringify([]))
    localStorage.setItem('totalPayment', JSON.stringify({}))
    localStorage.setItem('coupon', JSON.stringify([]))
    localStorage.setItem('ticket', JSON.stringify({}))
  }

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

  // function get thông tin của user
  getJWT(){

    let result = {}

    if (localStorage.getItem('jwt') !== null){
      result = JSON.parse(localStorage.getItem('jwt') || '{}')
    }else{
      localStorage.setItem('jwt', JSON.stringify({}))
    }

    return result
  }

  // function get userId
  getUserId(){
    let token: any = JSON.parse(localStorage.getItem('jwt') || '{}')
    return token.userId
  }

  //function get subjectId
  getSubjectId(){
    let token: any = JSON.parse(localStorage.getItem('jwt') || '{}')
    return token.subjectId
  }

  // function get name
  getName(){
    let token: any = JSON.parse(localStorage.getItem('jwt') || '{}')
    return token.name
  }

  // function get coupon
  getCoupon(){
    let result = []

    if (localStorage.getItem('coupon') !== null){
        result = JSON.parse(localStorage.getItem('coupon') || '[]')
    }else{
      localStorage.setItem('coupon', JSON.stringify([]))
    }

    return result
  }

  // function get ticket
  getTicket(){
    let result = {}

    if (localStorage.getItem('ticket') !== null){
      result = JSON.parse(localStorage.getItem('ticket') || '{}')
    }else{
      localStorage.setItem('ticket', JSON.stringify({}))
    }

    return result
  }

  // function lấy quyền user
  getPermission(){
    let token: any = JSON.parse(localStorage.getItem('jwt') || '{}')
    return token.permission
  }

  getAnotherRoom(){
    let another: any = JSON.parse(localStorage.getItem('anotherRoom') || '{}')
    return another
  }

  setAnotherRoom(room: any){
    localStorage.setItem('anotherRoom', JSON.stringify(room))
  }

  setCoupon(coupon: any){
    localStorage.setItem('coupon', JSON.stringify(coupon))
    this.TotalPayment()
  }

  setTicket(ticket: any){
    localStorage.setItem('ticket', JSON.stringify(ticket))
    this.TotalPayment()
  }

  setJWT(token: any){
    localStorage.setItem('jwt', JSON.stringify(token))
  }

  setName(name: any){
    let token: any = JSON.parse(localStorage.getItem('jwt') || '{}')
    token.name = name
    localStorage.setItem('jwt', JSON.stringify(token))
  }

  setImage(image: any){
    let token: any = JSON.parse(localStorage.getItem('jwt') || '{}')
    token.image = image
    localStorage.setItem('jwt', JSON.stringify(token))
  }

  setAnotherCart(cart: any){
    localStorage.setItem('another', JSON.stringify(cart))
  }

  // cập nhật total payment
  TotalPayment(){

    let ticket = JSON.parse(localStorage.getItem('ticket') || '{}')
    let coupon = JSON.parse(localStorage.getItem('coupon') || '[]')
    let myCarts = JSON.parse(localStorage.getItem('carts') || '[]')
    let anotherCarts = JSON.parse(localStorage.getItem('another') || '[]')

    const total = this.loopPrice(myCarts) + this.loopPrice(anotherCarts)

    const newData = {
      total,
      payment: this.getDiscountCoupon(total, coupon, ticket)
    }

    localStorage.setItem('totalPayment', JSON.stringify(newData))
  }

  // Khuyến mãi
  getDiscountCoupon(total: any, coupon: any, ticket: any){

    const newData = {
      total,
      payment: total
    }

    // Nếu có coupon
    if (coupon){
      coupon.forEach((element: any) => {
        newData.payment = newData.payment - element.discount
      });
    }

    // Nếu có ticket
    if (ticket._id){
      newData.payment = newData.payment - ((newData.total * ticket.tickId.value) / 100)
    }

    localStorage.setItem('totalPayment', JSON.stringify(newData))

    return newData.payment
  }

  // Hủy Ticket
  unTicket(ticket: any){

    let totalPayment = JSON.parse(localStorage.getItem('totalPayment') || '{}')

    const newData = {
      total: totalPayment.total,
      payment: totalPayment.payment + ((totalPayment.total * ticket.tickId.value) / 100)
    }

    localStorage.setItem('totalPayment', JSON.stringify(newData))
    this.setTicket({})

  }

  // Hủy Coupon
  unCoupon(coupon: any, index: any){

    let totalPayment = JSON.parse(localStorage.getItem('totalPayment') || '{}')

    const newData = {
      total: totalPayment.total,
      payment: totalPayment.payment + coupon.discount
    }

    localStorage.setItem('totalPayment', JSON.stringify(newData))

    // Tìm vị trí xóa tại Localstorage
    const newCoupon = this.getCoupon()
    newCoupon.splice(index, 1)
    this.setCoupon(newCoupon)

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

    this.TotalPayment()
  }  

  deleteProductAnother (index: any) {
    //Lấy dữ diệu có sẵn trong state
    const delete_cart = JSON.parse(localStorage.getItem('another') || '[]')

    //Xóa theo vị trí
    delete_cart.splice(index, 1)

    localStorage.setItem('another', JSON.stringify(delete_cart))

    this.TotalPayment()
  }  

  updateProduct(data: any) {
    const data_update_cart = data

    const update_cart = JSON.parse(localStorage.getItem('carts') || '[]')

    const index = update_cart.findIndex((value: any) => {
        return value.cartId === data_update_cart.cartId
    })

    update_cart[index].count = parseInt(data_update_cart.count)

    localStorage.setItem('carts', JSON.stringify(update_cart))

    this.TotalPayment()
  }  

}
