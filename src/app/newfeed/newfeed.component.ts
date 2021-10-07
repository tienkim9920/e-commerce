import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newfeed',
  templateUrl: './newfeed.component.html',
  styleUrls: ['./newfeed.component.css']
})
export class NewfeedComponent implements OnInit {

  loading: boolean = false

  listNewFeed: any = [
    { product: "Ao Thun Basic", price: '300000'},
    { product: "Ao Thun Basic", price: '300000'},
    { product: "Ao Thun Basic", price: '300000'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onScrollDown(){

    if (this.loading){
      return
    }

    this.loading = true

    setTimeout(() => {
      const newfeed = [
        { product: "Ao Thun Basic", price: '300000'},
        { product: "Ao Thun Basic", price: '300000'},
        { product: "Ao Thun Basic", price: '300000'},
      ]
  
      const merge = [...this.listNewFeed, ...newfeed]
  
      this.listNewFeed = merge
      
      this.loading = false
    }, 3000)
  }

}
