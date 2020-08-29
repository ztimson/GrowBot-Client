import {Component} from "@angular/core";
import {ChartDataSets} from "chart.js";
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'climate-graph',
  templateUrl: './climateGraph.component.html',
  styleUrls: ['./climateGraph.component.scss']
})
export class ClimateGraphComponent {
  timeFrame = '12';

  xLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  tempData: number[] = [28, 48, 40, 19, 86, 27, 90];
  toggleTemp = true;
  humidityData: number[] = [38, 28, 50, 9, 76, 17, 80];
  toggleHumidity = true;

  lightData: number[][] = [[1, 3], [4, 6]];
  toggleLight = false;
  fanData: number[][] = [[2, 5]];
  toggleFans = false;

  colors = [{
    backgroundColor: 'rgba(150,0,0,0.5)',
    borderColor: 'rgba(150,0,0,0.5)',
    pointBackgroundColor: 'rgba(0,0,0,0)',
    pointBorderColor: 'rgba(0,0,0,0)',
    pointHoverBackgroundColor: 'rgba(0,0,0,0)',
    pointHoverBorderColor: 'rgba(0,0,0,0)',
  }, {
    backgroundColor: 'rgba(0,150,0,0.5)',
    borderColor: 'rgba(0,150,0,0.5)',
    pointBackgroundColor: 'rgba(0,0,0,0)',
    pointBorderColor: 'rgba(0,0,0,0)',
    pointHoverBackgroundColor: 'rgba(0,0,0,0)',
    pointHoverBorderColor: 'rgba(0,0,0,0)',
  }];
  data = new BehaviorSubject(null);
  labels = new BehaviorSubject(null);
  options = new BehaviorSubject(null);
  plugins = [pluginAnnotations];

  constructor() {
    this.refresh();
  }

  refresh() {
    this.data.next([
      {data: this.tempData, label: 'Temperature', fill: false, showLine: this.toggleTemp},
      {data: this.humidityData, label: 'Humidity', fill: false, showLine: this.toggleHumidity}
    ]);

    this.labels.next(this.xLabels);

    let options = {
      responsive: true,
      scales: {
        xAxes: [{}],
        yAxes: [
          {
            id: 'y-axis-0',
            position: 'left',
            gridLines: {
              color: 'rgba(0,0,0,0)',
            },
            ticks: {
              callback: (val) => `${val} °C`,
              beginAtZero: true,
              maxTicksLimit: 10,
              precision: 0,
              stepSize: 5
            }
          },
          {
            id: 'y-axis-1',
            position: 'right',
            gridLines: {
              color: 'rgba(0,0,0,0)',
            },
            ticks: {
              callback: (val) => `${Math.round(val * 100)} %`,
              beginAtZero: true,
              maxTicksLimit: 10,
              precision: 0,
              stepSize: 0.1,
              suggestedMax: 1,
              suggestedMin: 0
            }
          }
        ]
      },
      annotation: {
        annotations: [],
      },
    };
    if(this.toggleLight) {
      this.lightData.forEach((dataPoint: number[]) => {
        options.annotation.annotations.push({
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          xMin: dataPoint[0],
          xMax: dataPoint[1],
          yMin: 0,
          yMax: 100,
          borderWidth: 3,
          borderColor: 'orange',
          backgroundColor: 'rgba(255,255,0,0.1)',
        });
      });
    }
    if(this.toggleFans) {
      this.fanData.forEach((dataPoint: number[]) => {
        options.annotation.annotations.push({
          type: 'box',
          drawTime: 'beforeDatasetsDraw',
          xScaleID: 'x-axis-0',
          yScaleID: 'y-axis-0',
          xMin: dataPoint[0],
          xMax: dataPoint[1],
          yMin: 0,
          yMax: 100,
          borderWidth: 3,
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)',
        });
      });
    }
    this.options.next(options);
  }
}
