import { Component, OnInit } from '@angular/core';
import ThamSo from '../pattern/ThamSo';

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {

  loading: boolean = false

  thamSo = new ThamSo()

  page: any = 1

  constructor() {
    this.thamSo.getListNewfeed(this.page)
  }

  ngOnInit(): void {
  }

  onScrollDown(){

    if (this.loading){
      return
    }

    this.loading = true

    setTimeout(() => {
      this.page += 1
      this.thamSo.getListNewfeed(this.page)
      
      this.loading = false
    }, 3000)
  }

}
