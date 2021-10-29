import { Component, OnInit } from '@angular/core';
import Address from 'src/app/pattern/Address';
import Shop from 'src/app/pattern/Shop';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  shop = new Shop('', '', '', '', 0, '', '') // Để hiển thị

  address = new Address('', '', '', '', '', '', true) // Để thêm

  constructor() { }

  ngOnInit(): void {
    
  }

  async handlerInsertAddress(){


  }
}
