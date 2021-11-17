import { Component, OnInit } from '@angular/core';
import ThamSo from 'src/app/pattern/ThamSo';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  year: any = [2021, 2022, 2023]
  month: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  day: any = []

  thamSo = new ThamSo()

  checking: number = 1

  getDay: number = 1

  getMonth: any = 1

  getYear: any = 2021

  total: number = 0

  constructor( ) {
    this.forDay()
  }

  ngOnInit(): void {
  }

  // Lọc theo ngày tháng năm
  handlerFilter(){
    const query = `checking=${this.checking}&getDay=${this.getDay}&getMonth=${this.getMonth}&getYear=${this.getYear}`
    this.thamSo.getListStatistic(JSON.parse(localStorage.getItem('jwt')!).subjectId, query)

    setTimeout(() => {
      this.total = 0
      this.thamSo.listStatistic.forEach((element: any) => {
        this.total += element.total
      })
    }, 1000)
  }

  handlerChecking(checking: any){
    this.checking = checking
  }

  forDay(){
    for (let i = 1; i <= 31; i++){
      this.day.push(i)
    }
  }

}
