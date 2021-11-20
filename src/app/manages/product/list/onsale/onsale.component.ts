import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import ListProduct from '../ListProduct';

@Component({
  selector: 'app-onsale',
  templateUrl: './onsale.component.html',
  styleUrls: ['./onsale.component.css']
})
export class OnsaleComponent implements OnInit {

  product = new ListProduct()

  search: string = ''

  page: number = 1

  constructor(private cartService: CartService) { 
    this.getProduct()
  }

  handlerPage(item: any) {
    this.page = item
    this.getProduct()
  }

  handlerSearch() {
    this.getProduct()
  }

  getProduct(){
    const query = `search=${this.search}&page=${this.page}`
    this.product.getSaleProductShop(this.cartService.getSubjectId(), query)
  }

  ngOnInit(): void {
  }

}
