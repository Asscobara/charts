import {Component} from '@angular/core';
import { BaseChartComponent } from '../base-chart/base-chart.component';
import {CHART_TYPE} from '../common/declarations';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: '../base-chart/base-chart.component.html',
  styleUrls: ['../base-chart/base-chart.component.css']
})
export class BarChartComponent extends BaseChartComponent {

  constructor() {
    super();
  }

  protected parseData(data: any): void {
    this.chartType = CHART_TYPE.BAR;
    this.chartOptions.animation = {
      onComplete: (chart) => this.setTextValuePosition(chart)
    };
    super.parseData(data);
  }

  private setTextValuePosition(chart): void {

    const canvas = this.chartJSContainer.nativeElement;
    const ctx = canvas.getContext('2d');

    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.font = '30px Arial #757575';

    this.data.dataSet.forEach((dataset, i) => {
      const meta = chart.chartInstance.controller.getDatasetMeta(i);
      meta.data.forEach((bar, index) => {
        const data = dataset.data[index];
        ctx.fillText(data, bar._model.x, bar._model.y - 5);
      });
    });
  }
}
