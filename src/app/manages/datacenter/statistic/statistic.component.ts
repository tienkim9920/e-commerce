import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  year: any = [2021, 2022, 2023]
  month: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  day: any = []

  checking: number = 1

  getDay: number = 1

  getMonth: any = 1

  getYear: any = 2021

  constructor( ) {
    this.forDay()
  }

  ngOnInit(): void {
  }

  handlerFilter(){
    var sTable = (document.getElementById("customers") as HTMLDivElement).innerHTML;

    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";

    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=900,width=1000')!;

    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write("<div>123</div>");         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');

    win.document.close(); 	// CLOSE THE CURRENT WINDOW.

    win.print();    // PRINT THE CONTENTS.         
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
