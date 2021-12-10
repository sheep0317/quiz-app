import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() lineChartData: ChartDataSets[] = [
    { },
  ];
  @Input() lineChartLabels: Label[] = [];
  public lineChartOptions:any = {
    responsive: true,
    options : {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero : true,
            min: 0
          }
        }]
      }
    },
    title: {
      text: 'Thống kê điểm',
      display: true,
      position:'bottom',
      fontSize: '20',
      fontColor: '#2b6777'
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: '#2b6777',
      backgroundColor: 'rgb(43, 103, 119, 0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line' as ChartType;
  public lineChartPlugins = [];

  constructor() { }

  ngOnInit() {
  }

}
