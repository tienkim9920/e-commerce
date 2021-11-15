import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Shop from 'src/app/pattern/Shop';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  shop = new Shop('', '', '', '', '', 0, '', '')

  constructor(private route: ActivatedRoute, private router: Router) {
    this.shop._id = this.route.snapshot.paramMap.get('id')
    this.shop.getAddress()
  }

  ngOnInit(): void {
  }

  directAddress(item: any){
    window.location.href = `/shop/address/map/${item}`
  }
}
