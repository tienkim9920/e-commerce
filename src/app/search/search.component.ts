import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  filter:any={page:1 ,pageSize:4, search:""}
  constructor() { }

  ngOnInit(): void {
  }
  typesOfShoes: string[] = ['Boots','dsfdsf fds', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
}
