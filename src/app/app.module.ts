import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartsComponent} from './chart/charts/charts.component';
import {BaseChartComponent} from './chart/base-chart/base-chart.component';
import {PieChartComponent} from './chart/pie-chart/pie-chart.component';
import {BarChartComponent} from './chart/bar-chart/bar-chart.component';
import {DoughnutChartComponent} from './chart/doughnut-chart/doughnut-chart.component';
import {RadarChartComponent} from './chart/radar-chart/radar-chart.component';
import {PolarAreaChartComponent} from './chart/polar-area-chart/polar-area-chart.component';
import {BubbleChartComponent} from './chart/bubble-chart/bubble-chart.component';
import {ScatterChartComponent} from './chart/scatter-chart/scatter-chart.component';
import {LineChartComponent} from './chart/line-chart/line-chart.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    BaseChartComponent,
    PieChartComponent,
    BarChartComponent,
    DoughnutChartComponent,
    RadarChartComponent,
    PolarAreaChartComponent,
    BubbleChartComponent,
    ScatterChartComponent,
    LineChartComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
