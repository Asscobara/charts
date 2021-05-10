import {Component, Input, OnInit} from '@angular/core';
import {CHART_TYPE} from '../common/declarations';
import {ChartOptions} from 'chart.js';

@Component({
  selector: 'app-spark-line',
  templateUrl: 'sparkline.component.html',
  styleUrls: ['sparkline.component.css']
})
export class SparklineComponent implements OnInit {

  @Input() public data = [];
  @Input() public chartType: CHART_TYPE;
  @Input() public chartData: any;
  @Input() public chartIndex: number;
  @Input() public width = '450px';
  @Input() public height = '500px';

  public CHART_TYPE = CHART_TYPE;

  public chartOptions: (ChartOptions & { annotation: any }) = {
    legend: {
      display: false
    },
    showLines: true,
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        }
      }],
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }]
    },
    annotation: {
      annotations: [],
    }
  };

  constructor() {

  }

  public ngOnInit(): void {

  }

  protected parseData(data: any): void {

  }

}
