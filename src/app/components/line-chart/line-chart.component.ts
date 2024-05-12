import { Component, Input } from '@angular/core';
import Chart, { ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  @Input()
  public title: string = 'My Line Chart';

  @Input()
  public set data(value: ChartData) {
    if (value.datasets.length <= 0) {
      return;
    }
    
    this._data = value;
    this.initChart();
  }

  private _initialized = false;

  private _data: ChartData = { labels: [], datasets: [] };

  public lineChart: any = [];

  private initChart() {

    if (this._initialized) return;

    this._initialized = true

    this.lineChart = new Chart('line-chart', {
      type: 'line',
      data: this._data,
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
            position: 'left'
          }
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
