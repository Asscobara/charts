import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Color, Label, SingleDataSet} from 'ng2-charts';
import * as pluginAnnotations from 'chart.js';
import {CHART_TYPE, DEFAULT_COLORS} from '../common/declarations';
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
  @Input() public hasToolTips = true;

  @Output() public onZoom: EventEmitter<any> = new EventEmitter();

  public chartType: ChartType = CHART_TYPE.LINE;
  public chartDataSet: ChartDataSets[];
  public chartSingleData: SingleDataSet;
  public chartLabels: Label[];

  @Input() public chartOptions: ChartOptions = {
    responsive: true,
    tooltips: {
      enabled: false
    },
    legend: {
      position: 'bottom',
      labels: {
        fontSize: 11,
        usePointStyle: true
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: false,
        }
      }],
      yAxes: [{
          gridLines: {
            display: false
          }
        }
      ]
    }
  };

  public chartColors: Color[];
  public chartLegend = true;
  public chartPlugins = [pluginAnnotations];
  public drag = false;

  private emptyTooltipInfo: ITooltipInfo = {
    bars: [],
    x: '',
    y: ''
  };

  public tooltipInfo: ITooltipInfo = null;

  @ViewChild('overlay', { static: true }) public overlay: ElementRef;
  @ViewChild('chartJSContainer', { static: true }) public chartJSContainer: ElementRef;

  @Input() public supportZoom = false;

  public hovering = false;

  public constructor() {
    this.createDefaultColors();
    this.tooltipInfo = this.emptyTooltipInfo;
  }

  public ngOnInit(): void {

  }

  private createDefaultColors(): void {

    this.chartColors = [];

    DEFAULT_COLORS.forEach(color => {
      this.chartColors.push({
        backgroundColor: color,
        borderColor: color,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: color
      });
    });
  }

  private setCanvasAndOverlay(): void {
    if (!this.supportZoom) {
      return;
    }
    const canvas = this.chartJSContainer.nativeElement;
    const ctx = canvas.getContext('2d');

    const chart = new Chart(ctx,  {
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: this.chartDataSet
      },
      options: this.chartOptions
    });

    const overlay = this.overlay.nativeElement;
    let startIndex = 0;
    overlay.width = canvas.width;
    overlay.height = canvas.height;
    const selectionContext = overlay.getContext('2d');
    const selectionRect = {
      w: 0,
      startX: 0,
      startY: 0
    };

    canvas.addEventListener('resize', e => {
      overlay.width = canvas.width;
      overlay.height = canvas.height;
    });

    canvas.addEventListener('pointerdown', evt => {
      // TODO:
      overlay.width = canvas.width;
      overlay.height = canvas.height;

      const points = (chart as any).getElementsAtEventForMode(evt, 'index', { intersect: false });
      startIndex = 0;
      if (points && points.length) {
        startIndex = (points[0] as any)._index;
      }
      const rect = canvas.getBoundingClientRect();
      selectionRect.startX = evt.clientX - rect.left;
      selectionRect.startY = chart.chartArea.top;
      this.drag = true;
    });
    canvas.addEventListener('pointermove', evt => {

      let rect = canvas.getBoundingClientRect();
      if (this.drag) {
        rect = canvas.getBoundingClientRect();
        selectionRect.w = (evt.clientX - rect.left) - selectionRect.startX;
        selectionContext.globalAlpha = 0.5;
        selectionContext.clearRect(0, 0, canvas.width, canvas.height);
        selectionContext.fillRect(selectionRect.startX,
          selectionRect.startY,
          selectionRect.w,
          chart.chartArea.bottom - chart.chartArea.top);
      } else {
        selectionContext.clearRect(0, 0, canvas.width, canvas.height);
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

      const points = (chart as any).getElementsAtEventForMode(evt, 'index', { intersect: false });
      this.drag = false;
      console.log('selected', points);
      console.log('implement filter between ' + this.chartLabels[startIndex] + ' and ' + this.chartLabels[points[0]._index]);
      this.onZoom.emit({
        fromX: startIndex,
        toX: points[0]._index,
        chartId: this.data.id
      });
    });
  }

  private handleOnHoverLegend(event: MouseEvent, legendItem: Chart.ChartLegendLabelItem): void {
    if (this.hovering) {
      return;
    }
    this.hovering = true;
    this.tooltipInfo = {
      bars: [],
      // text: legendItem.text,
      // color: legendItem.fillStyle,
      // title: '1 Jan 2021',
     // value: '12%',
      x: event.pageX + 10 + 'px',
      y: event.pageY - 20 + 'px'
    };
  }

  private handleOnLeaveLegend(event: MouseEvent, legendItem: Chart.ChartLegendLabelItem): void {
    this.hovering = false;
    this.tooltipInfo = this.emptyTooltipInfo;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.data) {
      this.parseData(this.data);
    }
    this.setCanvasAndOverlay();
  }

  protected parseData(data: any): void {
    this.chartLabels = data.xXis;
    this.chartDataSet = data.dataSet;
    console.log('data', data);
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {

    let chartIndex = -1;
    chartIndex = (active[0] as any)._datasetIndex;

    if (chartIndex !== -1) {
      console.log(event, active);
      this.hovering = true;
      this.tooltipInfo = {
        bars: [],
        x: event.pageX + 10 + 'px',
        y: event.pageY - 20 + 'px'
      };
      active.forEach( (a, i) => {
        this.tooltipInfo.bars.push({
          text: (active[i] as any)?._model.datasetLabel,
          color: (active[i] as any)?._model.backgroundColor,
          title: (active[i] as any)?._model.label,
          value: `${this.chartDataSet[i].data[(active[i] as any)?._index]}`
        });
      });
    }
  }

}

export interface ITooltipBar {
  title: string;
  color: string;
  text: string;
  value: string;
}
export interface ITooltipInfo {
  bars: ITooltipBar[];
  x: string;
  y: string;
}
