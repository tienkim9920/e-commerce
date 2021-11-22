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

  imageChange:any='https://icons-for-free.com/iconfiles/png/512/add+photo+plus+upload+icon-1320184027779532643.png'

  imageDefault:any

  constructor(private cartService: CartService) {

    // Lấy user id
    this.shop.userId = cartService.getUserId()

  }

  async ngOnInit(): Promise<void> {
    // Lấy detail shop of user id
    await this.shop.getDetailShopByUserId()

    this.imageDefault = this.shop.image
  }

  onSelectImage(e: any){

      const files=e.target.files[0]

      this.shop.image = files

      var reader= new FileReader();

      reader.readAsDataURL(files)

      reader.onload = (event:any) =>{

        this.imageChange = event.target.result

      }
  }

  async handlerPatchDetailShop(){

    var formData = new FormData();

    formData.append("name",this.shop.name);
    formData.append('description', this.shop.description);
    formData.append('file', this.shop.image);

    await this.shop.PATCH_SHOP(formData)
  }

}
