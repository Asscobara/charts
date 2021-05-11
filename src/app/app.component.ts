import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'charts';
  public data: any;
  public sparkLineData: any;

  constructor(private httpClient: HttpClient) {
    this.httpClient.get('./assets/data.json' ).subscribe((d: any) => this.data = d.charts);
    this.httpClient.get('./assets/sparkline.json' ).subscribe((d: any) => this.sparkLineData = d.sparkLines);
  }

  public handleZoom($event): void {
    this.httpClient.get('./assets/data.json' ).subscribe((d: any) => {
      this.data = this.calculateDataUponZoom(d.charts, $event);
    });
  }

  private calculateDataUponZoom(charts, zoomInfo): any {
    const chart = charts.find(c => c.id === zoomInfo.chartId);
    if (!chart) {
      return charts;
    }

    chart.dataSet.forEach(ds => {
      ds.data = ds.data.slice(zoomInfo.fromX, zoomInfo.toX);
    });

    chart.xXis = chart.xXis.slice(zoomInfo.fromX, zoomInfo.toX);

    return charts;
  }
}
