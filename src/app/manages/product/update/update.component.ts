import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/pattern/Product';
import Option from 'src/app/pattern/Option';
import Category from 'src/app/pattern/Category';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product = new Product('', '', '', '', '', '', [], '', '', '', '')
  inforAPI:any=""
  option=new Option("", "","",0)
  category=new Category("")
  listCategory=Array<Category>()

  constructor(private route: ActivatedRoute) {}

  async ngOnInit(): Promise<void> {
    const paramsId=this.route.snapshot.paramMap.get('id')
    this.listCategory=await this.category.GET_CATEGORY();
    await this.product.getDetailProduct(paramsId)
    await this.product.getOptionProduct(paramsId)
    this.option.productId=paramsId
  }

  removeOption(index: any): void {
    this.product.option.splice(index,1)
  }

  addOption(){
    this.option=new Option("","","",0)
    this.option.productId=this.route.snapshot.paramMap.get('id')
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
    this.inforAPI=await this.product.PATCH_PRODUCT(this.product._id);
  }

}
