import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Shop from 'src/app/pattern/Shop';
import Product from 'src/app/pattern/Product';
import Category from 'src/app/pattern/Category';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '') // Để hiển thị

  product = new Product('', '', '', '', '', [], 0, 0, 0, 0, 0, 0) // Để thêm

  category = new Category('')


  constructor(private cartService: CartService) {

    this.shop.userId = cartService.getUserId()

  }

  async ngOnInit(): Promise<void> {

    // Lấy address detail shop of user id
    await this.shop.getDetailShopByUserId()
    this.product.shopId = this.shop._id
    this.product.categoryId = this.category._id
    this.product.discount = 5
    this.product.like = 10
    this.product.comments = 5
    this.product.expiredTime = 10

  }

  async handlerInsertAddress(){
    this.shop.postProduct(this.product)
    console.log(this.product)
  }

}
