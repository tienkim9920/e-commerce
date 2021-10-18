import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)

    window.scroll(0,0)
  }

  changeSize(value: any){
    this.size = value
  }

  statusLike(){
    this.like = !this.like
  }

  addCart(){

    this.showToast = true

    const data = {
      productId: "1235",
      name: "Áo thun Basic",
      image: 'https://cf.shopee.vn/file/982288c945924c88183d6cc2149484e3_tn',
      price: '70000',
      size: 'M',
      count: 1
    }

    this.cartService.addProduct(data)
    this.cartService.TotalPayment()

    setTimeout(() => {
      this.showToast = false
    }, 3000)

  }

}
