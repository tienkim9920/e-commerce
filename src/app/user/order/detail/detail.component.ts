import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import API from 'src/app/http/http';
import Detail from 'src/app/pattern/Detail';
import Order from 'src/app/pattern/Order';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details= [];
  http: HttpClient;
  constructor(http: HttpClient) {this.http=http }

  ngOnInit(): void {
    this.http.get<any>(API.GET_DETAIL_BY_ORDER("6167be23dcaa478bb751a159")).subscribe(data => {
      this.details=data
      console.log(this.details);
    })

  }

}
