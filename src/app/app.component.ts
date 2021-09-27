import { Component, ElementRef, ViewChild } from '@angular/core';
import { pipe, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('sticky', { read: ElementRef }) sticky!: ElementRef<any>;

  auth: any = 'shop'

  search: any = ''

  searchUpdate: Subject<string> = new Subject<string>();

  subSearch: any = false

  listSearch: any = null

  constructor() {
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
    this.searchUpdate.next(value);
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

}
