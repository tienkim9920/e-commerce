
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  @Input() params: any
  @Input()order:any = []
  @Input()orderLength:Number = 0;
  @Input()filter:any;

  constructor() { }

  async ngOnInit(){


  }

}
