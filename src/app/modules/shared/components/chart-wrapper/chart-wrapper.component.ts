import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss']
})
export class ChartWrapperComponent implements OnInit {

  @Input() chartOptionsObj: any = {};

  ngOnInit() {
    console.log('ngOnInit - child');
  }

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  highcharts = Highcharts;
  highChart: Highcharts.Chart | null = null;
  data: any = [
    { x: Date.UTC(2018, 6, 16), y: 6 },
    { x: Date.UTC(2018, 6, 17), y: 5 },
    { x: Date.UTC(2018, 6, 18), y: 8 },
    { x: Date.UTC(2018, 6, 19), y: 5 }
  ];

  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'column',
        data: this.data,
        color: 'greenyellow',
        pointWidth: 16
      }
    ]
  }


  // handleUpdate() {
  //   this.chartOptions.title =  {
  //     text: 'updated'
  //   };

  //   this.chartOptions.series[0] = {
  //     type: 'line',
  //     data: this.data.reverse()
  //   }

  //   this.updateFlag = true;
  // }

}
