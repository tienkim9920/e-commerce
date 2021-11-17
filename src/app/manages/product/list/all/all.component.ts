import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import ListProduct from '../ListProduct';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

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
    this.product.getAllProductShop(this.cartService.getSubjectId(), query)
  }

  ngOnInit(): void {
  }

}
