import { Component, OnInit } from '@angular/core';
import {BaseChartComponent} from '../base-chart/base-chart.component';
import {CHART_TYPE} from '../common/declarations';

@Component({
  selector: 'app-radar-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component']
})
export class RadarChartComponent extends BaseChartComponent implements OnInit {

  constructor() {
    super();
  }

  public ngOnInit(): void {
  }

  protected parseData(data: any): void {
    this.chartType = CHART_TYPE.RADAR;
    super.parseData(data);
  }

}
