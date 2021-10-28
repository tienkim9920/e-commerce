import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Shop from '../pattern/Shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '')

  constructor(private route: ActivatedRoute) {
    this.shop._id = this.route.snapshot.paramMap.get('id')
    setTimeout(() => {
      this.shop.getDetailShop()
      this.shop.getListCoup()
    }, 1000)
  }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
