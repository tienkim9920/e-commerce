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

  constructor(private cartService: CartService) {
    this.getLocalStorage();
    this.feeShip = this.getFeeShip();
    this.sumPayment = this.totalPayment.payment + this.feeShip;
    this.initConfig();
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
