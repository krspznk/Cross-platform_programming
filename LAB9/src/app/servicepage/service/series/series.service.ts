import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(private logService: LogService) {}

  getSeries(x: number): number {
    let sum: number = 0;
    let term: number = x;
    let n: number = 1;

    while (Math.abs(term) > Number.EPSILON) {
        term = (Math.pow(-1, 1 + n) * Math.cos(n * x)) / (n * n);
        sum += term;
        n++;
    }
    const result: number = parseFloat(sum.toFixed(4)); // Округлюємо результат до 4 знаків після коми
    this.logService.write(`x=${x.toFixed(2)} y=${result}`);
    
    return result;
}



  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
      y = 0.0;

    do {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
        x += h;
      }
    }
    while (x <= xk)
    return this.xy;
  }
}
