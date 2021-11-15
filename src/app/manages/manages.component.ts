import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Shop from '../pattern/Shop';

@Component({
  selector: 'app-manages',
  templateUrl: './manages.component.html',
  styleUrls: ['./manages.component.css']
})

export class ManagesComponent implements OnInit {

  @ViewChild('sticky', { read: ElementRef }) sticky!: ElementRef<any>;

  id: any

  size: any = 'M'

  count: any = 1

  like: any = false

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  changeSize(value: any){
    this.size = value
  }

  statusLike(){
    this.like = !this.like
  }

}
