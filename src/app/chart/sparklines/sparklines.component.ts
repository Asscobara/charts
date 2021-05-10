import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CHART_TYPE} from '../common/declarations';

@Component({
  selector: 'app-sparklines',
  templateUrl: './sparklines.component.html',
  styleUrls: ['./sparklines.component.scss']
})
export class SparklinesComponent implements OnInit, OnChanges {

  @Input() public sparklineData: any;
  @Input() public data: any;

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed', changes);
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
  }

  private getChartById(chartId): any {
    return this.data?.find(d => d.id === chartId);
  }

  getChartType(chartId): CHART_TYPE {
    const chart = this.getChartById(chartId);
    if (!chart) {
      return null;
    }
    return chart.type;
  }

  getChartData(chartId): any {
    return this.getChartById(chartId);
  }

}
