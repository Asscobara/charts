import {Component} from '@angular/core';
import {BaseChartComponent} from '../base-chart/base-chart.component';
import {CHART_TYPE} from '../common/declarations';

@Component({
  selector: 'app-line-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component.css']
})
export class LineChartComponent extends BaseChartComponent {

  constructor() {
    super();
    this.supportZoom = true;
    this.chartOptions.scales.xAxes[0].gridLines.display = true;
    this.chartOptions.scales.yAxes[0].gridLines.display = true;
  }

  protected parseData(data: any): void {
    this.chartType = CHART_TYPE.LINE;
    super.parseData(data);
  }

}
