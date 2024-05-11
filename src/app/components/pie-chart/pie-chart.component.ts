import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input()
  public title: string = 'My Pie Chart';

  public pieChart: any = [];

  public ngOnInit(): void {
    this.initChart();
  }

  private initChart() {
    this.pieChart = new Chart('pie-chart', {
      type: 'pie',
      data: {
        // labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [2, 52, 90, 32, 130],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          // legend: {
          //   position: 'top',
          // },
          title: {
            display: true,
            text: 'Cars per household in USA 2021'
          }
        }
      },
    });
  }
}
