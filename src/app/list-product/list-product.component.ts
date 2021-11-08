import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export default class ListProductComponent implements OnInit {
  @Input() listProduct: any=[]

  constructor() { }

  ngOnInit(): void {
  }

}
