import { Component, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';

import Category from '../pattern/Category';
import ListCategory from './list-category';
import ListShop from './list-shop';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filter:any={page: 1, pageSize:12, minPrice:"", maxPrice:"",type: "", place:[], category:[] , keyWord:""}
  listCategory=new ListCategory();
  listShop=new ListShop();
  category=new Category("");
  params: any;
  path: any;
  status: boolean = false;
  errorRangePrice: string=""


  constructor(private route: ActivatedRoute, private router: Router) {

  }

  async ngOnInit(): Promise<void> {
    await this.listCategory.getCategory();
    combineLatest([this.route.params, this.route.queryParams]).subscribe(async ([params, queryParams]) => {
      this.setFilter(queryParams)
      if(params.id!==this.params){
        this.params = params.id
        await this.listShop.getShop(this.params,this.filter);
        this.path=this.router.url.split('?')[0]
      }
      this.loadCheckCategory()
      this.loadCheckPlace()
      await this.category.GET_PRODUCT_CATEGORY(this.params,this.filter);

      this.status=true;
     });

  }

  setFilter(queryParams: any){
    queryParams.page ? this.filter.page = queryParams.page : this.filter.page=1;
    queryParams.place ? this.filter.place = queryParams.place.split(","):this.filter.place=[]
    queryParams.category ? this.filter.category = queryParams.category.split(","):this.filter.category=[]
    queryParams.type ? this.filter.type = queryParams.type : this.filter.type = "";
    queryParams.minPrice? this.filter.minPrice=queryParams.minPrice:this.filter.minPrice=""
    queryParams.maxPrice? this.filter.maxPrice=queryParams.maxPrice:this.filter.maxPrice=""
    queryParams.keyWord? this.filter.keyWord=queryParams.keyWord:this.filter.keyWord=""
  }

  loadCheckPlace(){
    this.loadCheck(this.filter.place, this.listShop.listShop)
  }

  loadCheckCategory(){
      if(this.params==="search"){
        this.loadCheck(this.filter.category, this.listCategory.listCategory)
      }
  }

  loadCheck(data:any, name:any){
    if(data.length<=0){
      name.find((item: {completed: boolean }) => {
        item.completed=false
      })
    }
    else
    {
      name.find((item: { name:any,completed: boolean }) => {
        data.map((data:any)=>{
          if(data===item.name){
             item.completed=true
          }
        })
      })
    }
  }

  onCheckChange(item: any) {
    if(item.completed)
    {
      this.filter.place=[...this.filter.place, item.name]
      this.router.navigate([this.path],  { queryParams:{ place: this.filter.place.toString() }, queryParamsHandling: 'merge'  });
    }
    else{
      let updatePlace = this.filter.place.filter((data: any) => {
        return item.name !== data
      })
      this.filter.place =updatePlace;
      if(this.filter.place.length <= 0)
      {
        this.router.navigate([this.path],  { queryParams:{ place: null }, queryParamsHandling: 'merge'  });
      }
      else{
        this.router.navigate([this.path],  { queryParams:{ place: this.filter.place.toString()  }, queryParamsHandling: 'merge'  });
      }
    }
  }

  onCheckCategory(item: any) {
    if(item.completed)
    {
      this.filter.category=[...this.filter.category, item.name]
      this.router.navigate([this.path],  { queryParams:{ category: this.filter.category.toString() }, queryParamsHandling: 'merge'  });
    }
    else{
      let updatePlace = this.filter.category.filter((data: any) => {
        return item.name !== data
      })
      this.filter.category =updatePlace;
      if(this.filter.category.length <= 0)
      {
        this.router.navigate([this.path],  { queryParams:{ category: null }, queryParamsHandling: 'merge'  });
      }
      else{
        this.router.navigate([this.path],  { queryParams:{ category: this.filter.category.toString()  }, queryParamsHandling: 'merge'  });
      }
    }
  }

  onRangePriceSubmit(data: any){
    const minPrice = data.minPrice || null;
    const maxPrice = data.maxPrice || null;

    if(minPrice > maxPrice && minPrice && maxPrice){
       this.errorRangePrice="Vui lòng điền khoảng giá phù hợp"
    }else{
      this.errorRangePrice=""
      this.router.navigate([this.path],  { queryParams:{ minPrice: minPrice, maxPrice: maxPrice }, queryParamsHandling: 'merge'  });
      data.minPrice?console.log(data):""
    }
  }

}

