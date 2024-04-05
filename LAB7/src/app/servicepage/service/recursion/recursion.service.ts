import { Injectable } from '@angular/core';
import { LogService } from '../logger/log.service';

@Injectable({
  providedIn: 'root'
})
export class RecursionService {
  private xy = new Map<number, number>(); 

  constructor(private logService: LogService) { }

  getTab(xn: number = 0.1, xk: number = 3.14, h: number = 0.1) {
    let x = xn,
        y = 0.0;

    while (x <= xk) {
        y = (xk * xk - 3 * x * x) / 12;
        this.xy.set(x, y);
        if (this.logService) {
            this.logService.write("x=" + x.toFixed(2) + " y=" + this.xy.get(x)!.toFixed(4));
        }

        x += h;
    }

    return this.xy
}

}
