import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input()
  public title: string = 'My Line Chart';

  public lineChart: any = []

  public ngOnInit(): void {
    this.initChart();
  }

  private initChart() {
    this.lineChart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [1,100],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            yAxisID: 'y',
          },
          // {
          //   label: 'Dataset 2',
          //   data: [53, 593],
          //   borderColor: Utils.CHART_COLORS.blue,
          //   backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          //   yAxisID: 'y1',
          // }
        ]
      },
      options: {
        responsive: true,
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
    
            grid: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: 'Population of Alabama, Florida and California'
          }
        }
      },
    })
  }
}
