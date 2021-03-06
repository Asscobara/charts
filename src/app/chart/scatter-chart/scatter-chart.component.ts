import {Component} from '@angular/core';
import {BaseChartComponent} from '../base-chart/base-chart.component';
import {CHART_TYPE} from '../common/declarations';

@Component({
  selector: 'app-scatter-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component.css']
})
export class ScatterChartComponent extends BaseChartComponent {

  constructor() {
    super();
  }

  protected parseData(data: any): void {
    this.chartType = CHART_TYPE.SCATTER;
    super.parseData(data);
  }
}
