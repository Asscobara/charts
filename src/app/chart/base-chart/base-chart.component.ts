import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label, SingleDataSet} from 'ng2-charts';
import * as pluginAnnotations from 'chart.js';
import {CHART_TYPE} from '../common/declarations';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.css']
})
export class BaseChartComponent implements OnInit, OnChanges {

  @Input() public data: any;
  @Input() public width = '450px';
  @Input() public height = '500px';
  @Input() public hasBorder = true;

  public chartType: ChartType = CHART_TYPE.LINE;
  public chartDataSet: ChartDataSets[];
  public chartSingleData: SingleDataSet;
  public chartLabels: Label[];

  @Input() public chartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };

  public chartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public chartLegend = true;

  public chartPlugins = [pluginAnnotations];
  public drag = false;

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  public constructor() {

  }

  public ngOnInit(): void {

    const canvas = document.getElementById('chartJSContainer');
    const ctx = (canvas as any).getContext('2d');
    const chart = new Chart(ctx, {options: this.chartOptions});
    const overlay = document.getElementById('overlay');
    let startIndex = 0;
    overlay.style.width = canvas.style.width;
    overlay.style.height = canvas.style.height;
    const selectionContext = (overlay as any).getContext('2d');
    const selectionRect = {
      w: 0,
      startX: 0,
      startY: 0
    };
    canvas.addEventListener('pointerdown', evt => {
      const points = (chart as any).getElementsAtEventForMode(evt, 'index', {
        intersect: false
      });
      startIndex = points[0]._index;
      const rect = canvas.getBoundingClientRect();
      selectionRect.startX = evt.clientX - rect.left;
      selectionRect.startY = chart.chartArea.top;
      this.drag = true;
      // save points[0]._index for filtering
    });
    canvas.addEventListener('pointermove', evt => {

      let rect = canvas.getBoundingClientRect();
      if (this.drag) {
        rect = canvas.getBoundingClientRect();
        selectionRect.w = (evt.clientX - rect.left) - selectionRect.startX;
        selectionContext.globalAlpha = 0.5;
        selectionContext.clearRect(0, 0, canvas.style.width, canvas.style.height);
        selectionContext.fillRect(selectionRect.startX,
          selectionRect.startY,
          selectionRect.w,
          chart.chartArea.bottom - chart.chartArea.top);
      } else {
        selectionContext.clearRect(0, 0, canvas.style.width, canvas.style.height);
        const x = evt.clientX - rect.left;
        if (x > chart.chartArea.left) {
          selectionContext.fillRect(x,
            chart.chartArea.top,
            1,
            chart.chartArea.bottom - chart.chartArea.top);
        }
      }
    });
    canvas.addEventListener('pointerup', evt => {

      const points = (chart as any).getElementsAtEventForMode(evt, 'index', {
        intersect: false
      });
      this.drag = false;
      console.log('selected', points);
      // emit console.log('implement filter between ' + options.data.labels[startIndex] + ' and ' + options.data.labels[points[0]._index]);
    });
  }

  public ngOnChanges(changes: SimpleChanges): void {

    if (changes.data) {
      this.parseData(this.data);
    }
  }

  protected parseData(data: any): void {
    this.chartLabels = data.xXis;
    this.chartDataSet = data.dataSet;
    console.log('data', data);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
