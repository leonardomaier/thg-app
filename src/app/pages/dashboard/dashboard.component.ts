import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';
import { lastValueFrom } from 'rxjs';
import { APIResult, DataService } from 'src/app/services/data.service';

interface ChartColor { borderColor: string; backgroundColor: string };

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public pieChartData: ChartData = { labels: [], datasets: [] };

  public lineChartData: ChartData = { labels: [], datasets: [] };

  public constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.fetchData();
  }

  public async fetchData() {
    const [populationData, carsPerHouseholdData]: APIResult[] = await Promise.all([
      await lastValueFrom(this.dataService.getPopulation()),
      await lastValueFrom(this.dataService.getCarsPerHousehold()),
    ]);

    this.lineChartData = {
      labels: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'],
      datasets: Object.keys(populationData.data).map(state => {
        const { backgroundColor, borderColor } = this.getColorByState(state);
        const values = populationData.data[state].map(([_, population]: [string, number]) => population);
        return {
          label: state,
          data: values,
          borderColor: [borderColor],
          backgroundColor: [backgroundColor],
          yAxisID: 'y'
        }
      })
    };

    this.pieChartData = {
      labels: carsPerHouseholdData.data['labels'],
      datasets: [
        {
          label: 'Quantity',
          data: carsPerHouseholdData.data['quantity']
        }
      ]
    };
  }

  private getColorByState(state: string): ChartColor {
    const colors: { [key: string]: ChartColor } = {
      'Alabama': {
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)'
      },
      'California': {
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)'
      },
      'Florida': {
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)'
      },
    }

    return colors[state];
  }
}
