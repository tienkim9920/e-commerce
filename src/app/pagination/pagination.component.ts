import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  page = 1;
  router: any;
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  getPageChange(){
    this._router.navigate(['/search'],  { queryParams: { page: this.page }});
    console.log(this.page)
  }


}
