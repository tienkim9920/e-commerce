import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  filterOrder: any = 'Tất cả sản phẩm'

  constructor() { }

  ngOnInit(): void {
  }

  handlerFilter(value: any){
    this.filterOrder = value
  }

}
