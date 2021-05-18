import {ChartDataSets} from 'chart.js';

export enum CHART_TYPE {
  BAR = 'bar',
  HOR_BAR = 'horizontalBar',
  BUBBLE = 'bubble',
  DOUGHNUT = 'doughnut',
  LINE = 'line',
  PIE = 'pie',
  POLAR_AREA = 'polarArea',
  RADAR = 'radar',
  SCATTER = 'scatter'
}

export interface IChart {
  id: number;
  type: CHART_TYPE;
  display: boolean;
  xXis: string[];
  dataSet: ChartDataSets[];
}

export interface ISparkLine {
  chartId: number;
  chartColumnIndex: number;
  data: string[] | number[];
}

export interface ISparkLines {
  columns: string[];
  sparkLines: ISparkLine[];
}

export const DEFAULT_COLORS = [
  '#c4532c',
  '#8390b7',
  '#f7c72e',
  '#32b374',
  '#d0021b',
  '#74b3ce',
  '#2a2977',
  '#e46425',
  '#0c7c59',
  '#c94f93',
  '#296eb4',
  '#acb8dc',
  '#b1dced',
  '#4d5194',
  '#11544f',
  '#8a4f7d',
  '#8bd99b',
  '#aea3b0',
  '#6d1a36',
  '#ce84ad'
];
