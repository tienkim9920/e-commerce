import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/pattern/Product';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() product: any = {}

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
