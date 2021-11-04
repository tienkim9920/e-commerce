import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  @Input() filter: any
  @Input() filterOrder: any=[]
  path:any
  constructor(private router:Router) {

  }

  ngOnInit(): void {
    this.path=this.router.url.split('?')[0]
    console.log(this.path)
  }

  onChangeStatus(item: any){
    this.filter.query = item
    this.router.navigate([this.path], { queryParams: { status: this.filter.query.status }, queryParamsHandling: 'merge' });
  }

  onSearchSubmit(data: any) {
    this.router.navigate([this.path],  { queryParams: { search: data.search }, queryParamsHandling: 'merge' });
  }

}
