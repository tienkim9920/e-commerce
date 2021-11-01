import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;

  user = new User('');

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

  constructor(private cartService: CartService) {
    this.getLocalStorage();
    this.feeShip = this.getFeeShip();
    this.sumPayment = this.totalPayment.payment + this.feeShip;
    this.initConfig();
    this.getTinh()

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

  changePayment(value: any) {
    this.activePayment = value;
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

    return 30000 * flag;
  }

  // GET API Tinh
  async getTinh(){
    const res = await fetch('http://localhost:4000/tinh')
    const data = await res.json()
    this.tinh = data.results
  }

  async getQuan(code: any){
    const res = await fetch(`http://localhost:4000/quan?code=${code}`)
    const data = await res.json()
    this.quan = data.results
  }

  async getPhuong(code: any){
    const res = await fetch(`http://localhost:4000/phuong?code=${code}`)
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
      onApprove: (data, actions) => {
        actions.order.get().then((details: any) => {
          console.log("Thanh toán thành công");
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: (err) => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }


}
