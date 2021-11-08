import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Shop from 'src/app/pattern/Shop';
import Product from 'src/app/pattern/Product';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '') // Để hiển thị

  product = new Product('', '', '', '', '', [], 0, 0, 0, 0, 0, 0) // Để thêm


  constructor(private cartService: CartService) {

    this.shop.userId = cartService.getUserId()

    setTimeout(() => {
      this.shop.getListProductByUserId()
    }, 500)

  }

  async ngOnInit(): Promise<void> {

    // Lấy address detail shop of user id
    await this.shop.getDetailShopByUserId()
    this.product.shopId = this.shop._id
    console.log(this.product)

  }

  async handlerDeleteProduct(product : Product){
    await this.shop.deleteProduct(product)
  }

  
}
