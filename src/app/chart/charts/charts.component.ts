import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CHART_TYPE} from '../common/declarations';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() public data = [];
  @Output() public onZoom: EventEmitter<any> = new EventEmitter();

  public CHART_TYPE = CHART_TYPE;

  constructor() { }

  ngOnInit(): void {

  }

}
