import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sticky', { read: ElementRef }) sticky!: ElementRef<any>;

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

  onScrollTop(){
    window.scroll(0,0)
  }

  ngOnInit() {

    this.getLocalStorage()
    this.totalCount(this.myCarts, this.anotherCarts)

  }

  ngDoCheck(){
    
    this.getLocalStorage()
    this.totalCount(this.myCarts, this.anotherCarts)

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
}
