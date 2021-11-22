import { Component, OnInit } from '@angular/core';
import Category from 'src/app/pattern/Category';
import Option from 'src/app/pattern/Option';
import Product from 'src/app/pattern/Product';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  option=new Option("", "","",0)
  product= new Product("","","","","","",[],"","","","","")

  category=new Category("")
  listCategory=Array<Category>()

  constructor() {
    this.product.option.push(this.option)
   }

  async ngOnInit(): Promise<void> {
    this.listCategory=await this.category.GET_CATEGORY();
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
        for(let i=0;i<File.length;i++){
          let image={
            url: "",
            file:null,
          }

          image.file= files[i]
          var reader= new FileReader();
          reader.readAsDataURL(files[i])
          reader.onload=(event:any) =>{

            image.url=event.target.result

            this.product.image.push(image)
          }
        }
      }
      e.srcElement.value=null
    }
  }

  deleteImage(index: number) {
    this.product.image.splice(index, 1)
  }

  onSubmitProduct(data: any){
    this.product.POST_PRODUCT();
  }

   getFormData(object:any) {
    const formData = new FormData();
    Object.keys(object).forEach(key => formData.append(key, object[key]));
    return formData;
  }





}
