import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  @ViewChild('widgetsContent', { read: ElementRef }) widgetsContent!: ElementRef<any>;

  scroll: any = true

  constructor() {

  }

  ngOnInit(): void {
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 1250), behavior: 'smooth' });
    this.scroll = !this.scroll
  }

  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 1250), behavior: 'smooth' });
    this.scroll = !this.scroll
  }

}
