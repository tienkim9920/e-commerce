import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() itemLength:any;
  @Input() filter: any={};
  @Input() path: any;

  constructor(private router: Router)
  {
    this.path = this.path ? this.path : this.router.url.split('?')[0]
  }
  ngOnInit() { }


  getPageChange() {
    console.log(this.filter)
    this.router.navigate([this.path],  { queryParams: { page: this.filter.page },  queryParamsHandling: 'merge'});
    window.scroll(0,0)
  }


}
