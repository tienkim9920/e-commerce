import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() itemLength:any
  @Input() filter: any
  path:any

  constructor(private router: Router)
  {
    this.path=this.router.url.split('?')[0]
  }
  ngOnInit(): void {
  }

  getPageChange() {
    this.router.navigate([this.path],  { queryParams: { page: this.filter.page },  queryParamsHandling: 'merge'});
    window.scroll(0,0)
  }


}
