import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/pattern/Product';
import { CartService } from '../../cart.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  showToast: boolean = false

  id: any

  size: any = 'M'

  count: any = 1

  like: any = false

  index = 0

  product = new Product('', '', '', '', '', '', [], '', '', '', '')

  constructor(private route: ActivatedRoute, private cartService: CartService) {
    setTimeout(() => {
      this.product.getDetailProduct(this.route.snapshot.paramMap.get('id'))
      this.product.getCommentProduct()
    }, 1000)
  }

  
  ngOnInit(): void {
    window.scroll(0,0)
  }

  changeSize(value: any){
    this.size = value
  }

  changeImage(index: any){
    this.index = index
  }

  statusLike(){
    this.like = !this.like
  }

  addCart(){

    this.showToast = true

    const data = {
      productId: this.product._id,
      shopId: this.product.shopId._id,
      name: this.product.name,
      image: this.product.image[0],
      price: this.product.price - ((this.product.price * this.product.discount) / 100),
      size: this.size,
      count: this.count
    }

    this.cartService.addProduct(data)
    this.cartService.TotalPayment()

    setTimeout(() => {
      this.showToast = false
    }, 3000)

  }

}
