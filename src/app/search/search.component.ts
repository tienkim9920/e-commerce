import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots','dsfdsf fds', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
