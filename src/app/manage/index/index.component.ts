import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  id: any

  size: any = 'M'

  count: any = 1

  like: any = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.log(this.id)

    window.scroll(0,0)
  }

  changeSize(value: any){
    this.size = value
  }

  statusLike(){
    this.like = !this.like
  }

}
