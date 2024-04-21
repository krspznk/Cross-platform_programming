import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TabService } from './service/tab/tab.service';
import { SeriesService } from './service/series/series.service';
import { RecursionService } from './service/recursion/recursion.service';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {


  ngOnInit() {
  }
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;
  xn: number = 0.1;
  xk: number = 3.14;
  h: number = 0.1;
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  constructor(
    private tabService: TabService,
    private seriesService: SeriesService,
    private recurseService: RecursionService
  ) {
    Chart.register(...registerables);
  }

  ras() {
    console.log('Табулювання');
    this.xyTab = this.tabService.getTab(this.xn, this.xk, this.h);
    console.log('Ряд');
    this.xySeries = this.tabService.getTab(this.xn, this.xk, this.h);
    console.log('Рекурсія');
    this.xyRecursion = this.recurseService.getTab(this.xn, this.xk, this.h);

    this.input();
    this.lineChartMethod();  }

    input() {
      this.xyTab.forEach((value, key, map) => {
        let s = '';
        let y: number = 0;
        y = value;
        s = y.toFixed(4) + ' ';
        y = this.xySeries.get(key);
        s = s + y.toFixed(4);
        y = this.xyRecursion.get(key);
        s = s + ' ' + y.toFixed(4);
        let x = key;
        this.xyInput.set(x.toFixed(2), s);
      });
    }

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    const xx_rec = Array.from(this.xyRecursion.keys());
    const yy_rec = Array.from(this.xyRecursion.values());

    const yy_tab = Array.from(this.xyRecursion.values());

    const yy_ser = Array.from(this.xyRecursion.values());

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: xx_rec,
        datasets: [
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(54, 431, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 5,
            pointHoverRadius: 9,
            pointStyle: 'circle',
            data: yy_rec,
            spanGaps: false,
          },
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(133, 54, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 5,
            pointHoverRadius: 9,
            pointStyle: 'circle',
            data: yy_tab,
            spanGaps: false,
          },
          {
            label: 'Графік функції',
            fill: false,
            borderColor: 'rgba(76, 121, 192, 1)',
            borderDashOffset: 0.0,
            pointRadius: 5,
            pointHoverRadius: 9,
            pointStyle: 'circle',
            data: yy_ser,
            spanGaps: false,
          },
        ],
      },
    });
  }
}
