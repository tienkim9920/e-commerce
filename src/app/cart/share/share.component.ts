import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import Client from 'src/app/pattern/Client';
import socket from '../../socket/socket'

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  client = new Client("", "", "", "", "")
  error: Boolean = false
  fullname: string = ''

  constructor(private route: ActivatedRoute, private router: Router, private cartService: CartService) {
    this.client.code = this.route.snapshot.paramMap.get('code')
  }

  ngOnInit(): void {

  }

  async handlerSubmit(){
    const checking = await this.client.getClientStatus()

    if (!checking){
      this.ToastError()
      return
    }

    socket.emit('joinCart', checking.code)

    const data = {
      userId: Math.random().toString(),
      fullname: this.fullname,
      code: this.client.code,
      limit: checking.limit,
      expiredtime: Date.now() + 300000
    }

    this.cartService.setAnotherRoom(data)

    this.router.navigate(['/'])
  }

  ToastError(){
    this.error = true
    setTimeout(() => {
      this.error = false
    }, 3000)
  }

}
