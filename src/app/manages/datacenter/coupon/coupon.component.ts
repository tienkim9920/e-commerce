import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Shop from 'src/app/pattern/Shop';
import Coup from 'src/app/pattern/Coup';


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '') // Để hiển thị

  coup = new Coup('', '', '', 0, '') // Để hiển thị

  constructor(private cartService: CartService) {

    // Lấy user id
    this.shop.userId = cartService.getUserId()

    setTimeout(() => {
      this.shop.getListCoup()
    }, 500)
  }

  async ngOnInit(): Promise<void> {

    // Lấy detail shop of user id
    await this.shop.getDetailShopByUserId()
    this.coup.shopId = this.shop._id

  }

  async handlerInsertCoup(){
    this.shop.postCoup(this.coup)
  }

  async handlerDeleteCoup(coup: Coup){
    await this.shop.deleteCoup(coup)
  }

  async handlerPatchCoup(data: any,index: any){
    await this.shop.patchCoup(data,index)
  }
}
