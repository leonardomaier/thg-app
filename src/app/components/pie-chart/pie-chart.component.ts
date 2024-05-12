import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartData } from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

  @Input()
  public title: string = 'My Pie Chart';

  @Input()
  public labels: string[] = []

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

  public pieChart: any = [];

  private initChart() {
    if (this._initialized) return;

    this._initialized = true

    this.pieChart = new Chart('pie-chart', {
      type: 'pie',
      data: this._data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            text: this.title
          }
        }
      },
    });
  }
}
