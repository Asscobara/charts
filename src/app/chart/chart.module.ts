import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {ChartsComponent} from './charts/charts.component';
import {BaseChartComponent} from './base-chart/base-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {PolarAreaChartComponent} from './polar-area-chart/polar-area-chart.component';
import {BubbleChartComponent} from './bubble-chart/bubble-chart.component';
import {ScatterChartComponent} from './scatter-chart/scatter-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {ChartsModule} from 'ng2-charts';
import {SparklineComponent} from './sparkline/sparkline.component';
import { SparklinesComponent } from './sparklines/sparklines.component';
import {HorBarChartComponent} from './hor-bar-chart/hor-bar-chart.component';

@NgModule({
  declarations: [
    BaseChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    LineChartComponent,
    ChartsComponent,
    SparklineComponent,
    SparklinesComponent,
    HorBarChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  exports: [
    ChartsComponent,
    SparklinesComponent
  ],
  providers: [],
  bootstrap: []
})
export class ChartModule { }
