import { Component } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng2-charts-demo';

  public barChartType: 'bar' = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartLabels: Label[] = [
    '20 Jan',
    '21 Jan',
    '22 Jan',
    '23 Jan',
    '24 Jan',
    '25 Jan',
  ];

  public barChartData: ChartDataSets[] = [
    {
      data: [65, 55, 80, 85, 50, 25],
      label: 'Volume',
      backgroundColor: 'rgba(114,194,255,255)',
      stack: 'Stack 0',
    },
    {
      data: [55, 65, 40, 35, 70, 95],
      label: 'Company B',
      backgroundColor: 'rgba(225,243,255,255)',
      stack: 'Stack 0',
    },
  ];

  public barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            fontColor: '#9e9e9e',
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            beginAtZero: true,
            fontColor: '#9e9e9e',
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
  };

  constructor() {}
}
