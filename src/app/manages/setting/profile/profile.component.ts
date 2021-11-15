import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Shop  from '../../../pattern/Shop';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '') // Để hiển thị
  image = 'https://cf.shopee.vn/file/6c1c9adf0bc9d0f0c20a18d1f5e8667d'

  constructor(private cartService: CartService) {

    // Lấy user id
    this.shop.userId = cartService.getUserId()

    setTimeout(() => {
      this.shop.getDetailShopByUserId()
    }, 500)

  }

  async ngOnInit(): Promise<void> {
    // Lấy detail shop of user id
    await this.shop.getDetailShopByUserId()
    // this.address.shopId = this.shop._id
  }

  onSelectImage(e: any){
      const files=e.target.files[0]
      console.log(files)

      this.shop.image= files
      var reader= new FileReader();
      reader.readAsDataURL(files)
      reader.onload=(event:any) =>{
        this.image=event.target.result
      }
  }


  async handlerPatchDetailShop(){
    var postData = JSON.stringify(this.shop);
    var formData = new FormData();
    formData.append("postData",postData);
    await this.shop.PATCH_SHOP(formData)
    console.log(this.shop)
  }

}
