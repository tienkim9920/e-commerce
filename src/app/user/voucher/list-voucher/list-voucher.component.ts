import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-list-voucher',
  templateUrl: './list-voucher.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./list-voucher.component.css']
})
export class ListVoucherComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor() { }

  ngOnInit(): void {
  }

}
