import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  currentItem = 'Hé lô';

  constructor() { }

  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
