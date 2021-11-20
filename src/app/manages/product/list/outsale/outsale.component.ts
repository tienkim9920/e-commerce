import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Product from 'src/app/pattern/Product';
import ListProduct from '../ListProduct';

@Component({
  selector: 'app-outsale',
  templateUrl: './outsale.component.html',
  styleUrls: ['./outsale.component.css']
})
export class OutsaleComponent implements OnInit {

  product = new ListProduct()
  productDelete=new Product("","","","","","","","","","","")

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
    this.product.getOutSaleProductShop(this.cartService.getSubjectId(), query)
  }

  ngOnInit(): void {
  }


  removeProduct(item:any,index: any){
    this.productDelete.DELETE_PRODUCT(item._id);
    this.product.products.splice(index, 1);
  }

}
