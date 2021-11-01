import { Component, OnInit } from '@angular/core';
import Client from 'src/app/pattern/Client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client= new Client("","","","","");
  constructor() { }

  ngOnInit(): void {
    this.client.getDetailClient(JSON.parse(localStorage.getItem('jwt')!).userId);
  }



}
