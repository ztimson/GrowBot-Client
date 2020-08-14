import {Component} from "@angular/core";
import {ChartDataSets} from "chart.js";
import * as pluginAnnotations from 'chartjs-plugin-annotation';

@Component({
  selector: 'climate-graph',
  templateUrl: './climateGraph.component.html',
  styleUrls: ['./climateGraph.component.scss']
})
export class ClimateGraphComponent {
  timeFrame = '12';

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
  data: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Temperature', fill: false},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Humidity', fill: false}
  ];
  labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  plugins = [pluginAnnotations];
  options = {
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
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(0,0,0,0)',
          }
        }
      ]
    },
    annotation: {
      annotations: [{
        type: 'box',
        drawTime: 'beforeDatasetsDraw',
        xScaleID: 'x-axis-0',
        yScaleID: 'y-axis-0',
        xMin: 1,
        xMax: 3,
        yMin: 0,
        yMax: 100,
        borderWidth: 3,
        borderColor: 'orange',
        backgroundColor: 'rgba(255,255,0,0.1)',
      }, {
        type: 'box',
        drawTime: 'beforeDatasetsDraw',
        xScaleID: 'x-axis-0',
        yScaleID: 'y-axis-0',
        xMin: 2,
        xMax: 5,
        yMin: 0,
        yMax: 100,
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'rgba(0,0,255,0.1)',
      }],
    },
  };

  constructor() { }
}
