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
  constructor(httpClient: HttpClient) {
    httpClient.get('../charts/assets/data.json' ).subscribe((d: any) => this.data = d.charts);
  }
}
