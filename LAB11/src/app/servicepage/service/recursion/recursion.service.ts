import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private xy = new Map<number, number>(); 

  constructor(private logService: LogService) { }
  getSeries(x: number, n: number = 1, mul:number = 1, sum: number = 0): number {
    const term = mul * (Math.cos(n * x) / (n * n));

    if (Math.abs(term) < 0.00000001) {
      return sum;
    }

    return this.getSeries(x, n + 1, -mul, sum + term);
  }
  
  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn;

    while (x <= xk) {
      const y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService) {
        this.logService.write('x=' + x.toFixed(2) + ' y=' + y.toFixed(4));
      }
      x += h;
    }

    return this.xy;
  }

}
