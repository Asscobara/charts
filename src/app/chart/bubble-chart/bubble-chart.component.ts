import { Component, OnInit } from '@angular/core';
import {BaseChartComponent} from '../base-chart/base-chart.component';
import {CHART_TYPE} from '../common/declarations';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component.css']
})
export class BubbleChartComponent extends BaseChartComponent implements OnInit {

  constructor() {
    super();
  }

  public ngOnInit(): void {
    this.chartOptions = {
      responsive: true,
        scales: {
        xAxes: [{
          ticks: {
            min: 0,
            max: 30,
          }
        }],
          yAxes: [{
          ticks: {
            min: 0,
            max: 30,
          }
        }]
      },
      annotation: {}
    };
  }

  protected parseData(data: any): void {
    this.chartType = CHART_TYPE.BUBBLE;
   // this.chartDataSet = data.dataSet[0].label;
   // this.chartLabels = data.dataSet[0].data;
    super.parseData(data);
  }


}
