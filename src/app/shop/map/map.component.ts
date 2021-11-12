import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Address from 'src/app/pattern/Address';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  address = new Address('', '', '', '', '', '', true)

  constructor(private route: ActivatedRoute) {
    this.address._id = this.route.snapshot.paramMap.get('id')
    this.address.getDetailAddressByAddressId(this.address._id)
  }

  ngOnInit(): void {
  }

}
