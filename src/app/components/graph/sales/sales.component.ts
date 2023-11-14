import { Component,OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit{
  Highcharts: typeof Highcharts = Highcharts;
  data = [1, 2, 3, 4];

  chartOptions: Highcharts.Options = {};

  constructor() { }

  ngOnInit(): void {
    this.getChartReady();
  }

  getChartReady(){
    this.chartOptions = {
      series: [{
        data: [1, 2, 3],
        type: 'column'
      }]
    };
  }



}
