import { Component, OnInit } from '@angular/core';
import Client from 'src/app/pattern/Client';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  success: Boolean = false

  client= new Client(JSON.parse(localStorage.getItem('jwt')!).subjectId, JSON.parse(localStorage.getItem('jwt')!).userId,"","","");

  constructor() { }

  ngOnInit(): void {
    this.client.getDetailClient();
  }

  changeLimit(value: any) {
    this.client.limit = value
  }

  async saveInfor() {
    this.success = true
    this.client.PATCH_LIMIT()

    setTimeout(() => {
      this.success = false
    }, 3000)
  }

}
