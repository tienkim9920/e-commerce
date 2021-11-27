import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import User from 'src/app/pattern/User';
import ThamSo from 'src/app/pattern/ThamSo';
import Note from 'src/app/pattern/Note';
import Order from 'src/app/pattern/Order';
import Detail from 'src/app/pattern/Detail';
import { Router } from '@angular/router';
import Ticket from 'src/app/pattern/Ticket';
import Coupon from 'src/app/pattern/Coupon';
import Option from 'src/app/pattern/Option'
import Product from 'src/app/pattern/Product';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;

  thamSo = new ThamSo()

  user = new User(JSON.parse(localStorage.getItem('jwt')!).userId);

  activePayment: any = 1;

  // Giỏ hàng của bạn
  myCarts: any;

  // Giỏ hàng của bạn bè
  anotherCarts: any;

  // Tổng thanh toán
  totalPayment: any;

  // ticket
  ticket: any;

  // coupon
  coupon: any;

  // Phí vận chuyển
  feeShip: any;

  // Tổng thanh toán
  sumPayment: any;

  // Get tỉnh thành
  tinh: any
  codeTinh: any

  // Get quận huyện
  quan: any
  codeQuan: any

  // Get phường xã
  phuong: any
  codePhuong: any

  // Số điện thoại
  phone: any

  // Địa chỉ cụ thể
  location: any

  // Địa chỉ cuối cùng
  address: any

  // Hiển thị loading
  loading: Boolean = false

  constructor(private cartService: CartService, private router: Router) {
    this.getLocalStorage();
    this.feeShip = this.getFeeShip();
    this.sumPayment = this.totalPayment.payment + this.feeShip;
    this.initConfig();
    this.getTinh()
    this.thamSo.getListPayment()
    this.user.getDetail()
    this.user.getCoupons()
    setTimeout(() => {
      this.activePayment = this.thamSo.listPay[1]
    }, 500)


    this.user.name = cartService.getName()
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  getLocalStorage() {
    this.myCarts = this.cartService.getMyCarts();
    this.anotherCarts = this.cartService.getAnotherCarts();
    this.totalPayment = this.cartService.getTotalPayment();
    this.ticket = this.cartService.getTicket();
    this.coupon = this.cartService.getCoupon();
  }

  changePayment(item: any) {
    this.activePayment = item;
  }

  // Hủy Coupon
  cancelCoupon(_id: any) {
    // Tìm vị trí của coupon cần xóa
    const indexCoupon = this.coupon.findIndex((element: any) => {
      return element._id === _id;
    });

    // Xóa tại localstorage
    this.cartService.unCoupon(this.coupon[indexCoupon], indexCoupon);
    this.totalPayment = this.cartService.getTotalPayment();
    this.sumPayment = this.totalPayment.payment + this.feeShip;

    // Xóa tại coupon
    this.coupon.splice(indexCoupon, 1);
  }

  // Hàm hủy ticket
  cancelTicket() {
    this.cartService.unTicket(this.ticket);
    this.totalPayment = this.cartService.getTotalPayment();
    this.sumPayment = this.totalPayment.payment + this.feeShip;
    this.ticket = {};
  }

  // Tính phí vận chuyển
  getFeeShip() {
    let flag = 1;

    this.myCarts.forEach((element: any) => {
      if (element.shopId._id !== this.myCarts[0].shopId._id) {
        flag++;
      }
    });

    if (this.anotherCarts.length > 0){
      flag++
      this.anotherCarts.forEach((element: any) => {
        if (element.shopId._id !== this.anotherCarts[0].shopId._id) {
          flag++;
        }
      });
    }
    
    return 30000 * flag;
  }

  // GET API Tinh
  async getTinh(){
    const res = await fetch('https://tk-ecommerce.herokuapp.com/tinh')
    const data = await res.json()
    this.tinh = data.results
  }

  // GET API Quận
  async getQuan(code: any){
    const res = await fetch(`https://tk-ecommerce.herokuapp.com/quan?code=${code}`)
    const data = await res.json()
    this.quan = data.results
  }

  // GET API Phường
  async getPhuong(code: any){
    const res = await fetch(`https://tk-ecommerce.herokuapp.com/phuong?code=${code}`)
    const data = await res.json()
    this.phuong = data.results
  }

  changeTinh(value: any){
    this.codeTinh = value
    setTimeout(() => {
      this.getQuan(this.codeTinh)
    }, 500)
  }

  changeQuan(value: any){
    this.codeQuan = value
    setTimeout(() => {
      this.getPhuong(this.codeQuan)
    }, 500)
  }

  changePhuong(value: any){
    this.codePhuong = value
  }

  // Hàm submit địa chỉ
  handlerSubmitAddress() {
    const indexTinh = this.tinh.findIndex((element: any) => {
      return element.code === this.codeTinh
    })

    const indexQuan = this.quan.findIndex((element: any) => {
      return element.code === this.codeQuan
    })

    const indexPhuong = this.phuong.findIndex((element: any) => {
      return element.code === this.codePhuong
    })

    this.address = `${this.location}, ${this.phuong[indexPhuong].name}, ${this.quan[indexQuan].name}, ${this.tinh[indexTinh].name}`
  }

  // Hàm thanh toán trực tiếp
  async ThanhToan(){
    this.loading = true

    let shopList: any = []

    // Tổng số tiền tất cả sản phẩm của Shop
    this.myCarts.forEach((element: any) => {

      // Kiểm tra xem cái shopId có tồn tại trong shopList chưa
      const checking = shopList.some((shop: any) => {
        return shop.shopId === element.shopId._id
      })

      if (checking){

        const index = shopList.findIndex((shop: any) => {
          return shop.shopId === element.shopId._id
        })

        shopList[index].total += element.price * element.count

        return
      }

      const data = {
        shopId: element.shopId._id,
        total: element.price * element.count
      }
      shopList.push(data)

    });

    // Tổng số tiền tất cả sản phẩm another của shop
    this.anotherCarts.forEach((element: any) => {

      // Kiểm tra xem cái shopId có tồn tại trong shopList chưa
      const checking = shopList.some((shop: any) => {
        return shop.shopId === element.shopId._id
      })

      if (checking){

        const index = shopList.findIndex((shop: any) => {
          return shop.shopId === element.shopId._id
        })

        shopList[index].total += element.price * element.count

        return
      }

      const data = {
        shopId: element.shopId._id,
        total: element.price * element.count
      }
      shopList.push(data)

    })

    // Nếu mà có áp dụng ticket
    if (this.ticket._id){
      shopList.forEach((element: any) => {
        element.total = element.total - (element.total * this.ticket.tickId.value / 100)
      });

      const ticket = new Ticket(this.ticket._id, this.cartService.getUserId(), this.ticket.tickId._id, true)
      await ticket.PATCH_TICKET()
    }

    // Nếu mà có áp dụng coupon
    if (this.coupon.length > 0){
      this.coupon.forEach(async (element: any) => {
        shopList.forEach((shop: any) => {
          if (element.shopId === shop.shopId){
            shop.total = shop.total - element.discount
          }
        })

        // Kiểm tra xem người dùng đó đã lưu coupon vào thông tin hay chưa
        const checking = this.user.checkingExistCoupon(element._id)
        const coupon = new Coupon('', this.cartService.getUserId(), element._id, false)
        if (!checking){
          coupon.status = true
          await coupon.POST_COUPON()
        }else{
          await coupon.PATCH_COUPON()
        }

      })
    }

    // Thêm vào đơn hàng và cộng dồn lên phí vận chuyển
    shopList.forEach(async (shop: any) => {

      // POST API note
      const note = new Note(30000, this.cartService.getName(), this.phone, this.address)
      const resultNote = await note.POST_NOTE()

      // POST API hóa đơn
      const statusThanhToan = this.activePayment.payment === 'offline' ? false : true
      const order = new Order('', this.cartService.getUserId(), this.activePayment._id, resultNote._id, shop.shopId,
      shop.total + 30000, "1", statusThanhToan, `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`)
      const resultOrder = await order.POST_ORDER()

      // POST API chi tiết hóa đơn và cập nhật số lượng tồn
      this.handlerDetailCheckingStock(this.myCarts, shop, resultOrder)

      // POST API chi tiết hóa đơn another và nhập nhật số lượng tồn
      this.handlerDetailCheckingStock(this.anotherCarts, shop, resultOrder)

    })

    // Cập nhật điểm tích lũy cho user
    this.user.score = this.user.score + 500
    await this.user.PATCH_SCORE()

    setTimeout(() => {
      this.cartService.resetLocalStorage()

      this.router.navigate(['/checkout/success'])
    }, 3000)

  }

  // Hàm thêm vào detail hóa đơn, cập nhật số lượng tồn, kiểm tra số lượng tồn
  handlerDetailCheckingStock(mycarts: any, shop: any, resultOrder: any){
    mycarts.forEach(async (cart: any) => {
      if (cart.shopId._id === shop.shopId){
        const detail = new Detail(cart.productId, resultOrder._id, cart.count, cart.size, false)
        await detail.POST_DETAIL()

        // Cập nhật số lượng tồn
        const option = new Option(cart.optionId, cart.productId, cart.size, 0)
        option.count = cart.stock - cart.count
        await option.PATCH_OPTION()

        // Kiểm tra số lượng tồn
        const product = new Product(cart.productId, '', '', '', '', '', '', '', '', '', '')
        const checking = await product.checkingCountOptionProduct()

        if (checking){
          await product.patchStatusStockProduct()
        }
      }
    })
  }

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: 'sb',
      createOrderOnClient: (data: any) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: Math.round(this.sumPayment / 23000).toString()
              },
            },
          ],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onClientAuthorization: (data) => {
        this.ThanhToan()
      },
    };
  }


}
