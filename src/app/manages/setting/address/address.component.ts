import { CartService } from 'src/app/cart.service';
import { Component, OnInit } from '@angular/core';
import Address from 'src/app/pattern/Address';
import Shop from 'src/app/pattern/Shop';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '') // Để hiển thị

  address = new Address('', '', '', '', '', '', true) // Để thêm

  newAddress : any

  constructor(private cartService: CartService) {

    // Lấy user id
    this.shop.userId = cartService.getUserId()

    setTimeout(() => {
      this.shop.getAddress()
    }, 500)

  }

  async ngOnInit(): Promise<void> {

    // Lấy detail shop of user id
    await this.shop.getDetailShopByUserId()
    this.address.shopId = this.shop._id
    console.log(this.address)

  }

  async handlerInsertAddress(){
    this.shop.postAddress(this.address)
    console.log(this.address)
  }

  async handlerDeleteAddress(address : Address){
    await this.shop.deleteAddress(address)
  }


  async handlerPatchAddress(data:any,index: any){
    await this.shop.patchAddress(data,index)
  }
  
}

