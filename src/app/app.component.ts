import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { CartService } from './cart.service';
import Client from './pattern/Client';
import socket from './socket/socket'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sticky', { read: ElementRef }) sticky!: ElementRef<any>;

  // client
  client = new Client('', '', '', '' ,'')

  // word tìm kiếm
  search: any = ''

  searchUpdate: Subject<string> = new Subject<string>();

  // Trang thái loading search
  subSearch: any = false

  // list search
  listSearch: any = null

  // Giỏ hàng của bạn
  myCarts: any

  // Giỏ hàng của bạn bè
  anotherCarts: any

  // Tổng thanh toán
  totalPayment: any

  // Tổng lượng sản phẩm
  count: any

  // Phiên đăng nhập người dùng
  user: any

  constructor(private cartService: CartService, private router: Router) {
    // debounce search
    this.searchUpdate.pipe(
      debounceTime(500),
      distinctUntilChanged())
      .subscribe(value => {
        setTimeout(() => {
          this.listSearch = value
          console.log(value)
        }, 1000)
      });
  }

  searchChange(value: any){
    this.listSearch = null

    if (value === ''){
      this.subSearch = false
      return
    }

    this.subSearch = true

    // debounce search
    this.searchUpdate.next(value);
  }

  onSearchProduct(data: any){
    this.router.navigate(["/product/search"],  { queryParams:{ keyWord: data.search }  });
  }

  onScrollTop(){
    window.scroll(0,0)
  }

  ngOnInit() {

    if (this.cartService.getUserId()){
      this.client.getDetailClient(this.cartService.getUserId())

      setTimeout(() => {
        this.JoinSocketCart()
      }, 500)
    }

    this.getLocalStorage()
    this.totalCount(this.myCarts, this.anotherCarts)

    //expiredTime cái giỏ hàng của another
    if (this.cartService.getAnotherRoom().expiredtime < Date.now()){
      localStorage.setItem('anotherRoom', JSON.stringify({}))
    }

  }

  ngDoCheck(){

    this.getLocalStorage()
    this.totalCount(this.myCarts, this.anotherCarts)

    this.resetSessionAnother()

  }

  ngAfterContentChecked(){
    window.onscroll = () => {
      if (window.pageYOffset >= this.sticky.nativeElement.offsetTop + 50) {
        this.sticky.nativeElement.classList.add("sticky")
      } else {
        this.sticky.nativeElement.classList.remove("sticky");
      }
    }
  }

  // Hàm này dùng để kết nối với socket giỏ hàng
  async JoinSocketCart(){
    const checking = await this.client.getClientStatus()

    if (!checking){
      return
    }

    socket.emit('joinCart', checking.code)
  }

  getLocalStorage(){
    this.myCarts = this.cartService.getMyCarts()
    this.anotherCarts = this.cartService.getAnotherCarts()
    this.totalPayment = this.cartService.getTotalPayment()
    this.user = this.cartService.getJWT()
  }

  totalCount(carts: any, another: any){
    const countCarts = this.loopCount(carts)
    const countAnother = this.loopCount(another)

    this.count = countCarts + countAnother
  }

  loopCount(carts: any){
    let result = 0

    carts.forEach((element: any) => {
      result += element.count
    });

    return result
  }

  logOut(){
    this.user = this.cartService.setJWT({})
    this.router.navigate(['/login'])
  }

  redirectLucky(){
    if (!this.cartService.getUserId()){
      this.router.navigate(['/login'])
    }else{
      this.router.navigate(['/lucky'])
    }
  }

  //expiredTime cái giỏ hàng của another
  resetSessionAnother(){
    setInterval(() => {
      if (this.cartService.getAnotherRoom().expiredtime < Date.now()){
        localStorage.setItem('anotherRoom', JSON.stringify({}))
      }
    }, 300000)
  }

}
