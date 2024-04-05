import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private xy = new Map();
  constructor(private logService: LogService) {}

  getSeries(x: number) {
    let sum = 0;
    let term = x;
    let n = 1;

    do {
        try {
            term = (Math.pow(-1, 1 + n) * Math.cos(n * term)) / (n * n);
        } catch {
            this.logService.write("This is me");
        }
        sum += term;
        n++;
        this.logService.write(sum.toFixed(4));
    } while (term > -Math.PI && term < Math.PI);

    this.logService.write("Hello: " + sum.toFixed(4));

    return sum;
}



  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
      y = 0.0;

    while (x <= xk) {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
        x += h;
      }
    }
    return this.xy;
  }
}
