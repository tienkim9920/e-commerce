import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import Category from 'src/app/pattern/Category';
import Option from 'src/app/pattern/Option';
import Product from 'src/app/pattern/Product';
import Shop from 'src/app/pattern/Shop';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  option=new Option("", "","",0)
  product= new Product("","","","","","",[],"","","","")
  shop=new Shop("","","","","",0,"","")

  category=new Category("")
  listCategory=Array<Category>()
  inforAPI:any=""

  constructor(cartService:CartService) {
    this.product.option.push(this.option)
    this.shop.userId=cartService.getUserId()
  }

  async ngOnInit(): Promise<void> {
    this.listCategory=await this.category.GET_CATEGORY();
    await this.shop.getDetailShopByUserId()
    this.product.shopId=this.shop._id
    this.product.categoryId=this.listCategory[0]._id
  }

  removeOption(index: any): void {
    this.product.option.splice(index,1)
  }

  addOption(){
    this.option=new Option("","","",0)
    this.product.option.push(this.option)
  }

  onSelectImage(e: any){
    if(this.product.image.length<4){
      const files=e.target.files

      if(files){
        for(let i=0;i<files.length;i++){

            let image={
              url: "",
              file:null,
              fileName:""
            }

            image.file= files[i]
            image.fileName= files[i].name
            var reader= new FileReader();
            reader.readAsDataURL(files[i])
            reader.onload=(event:any) =>{

            image.url=event.target.result
            if(this.product.image.length<4){
              this.product.image.push(image)
            }


          }
        }
      }
      e.srcElement.value=null
    }
  }

  deleteImage(index: number) {
    this.product.image.splice(index, 1)
  }

  async onSubmitProduct(data: any){
    this.inforAPI=""
    this.inforAPI=await this.product.POST_PRODUCT();
  }
}
