import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor() { }
  a: number = 0;
  b: number = 0;
  c: number = 0;
  d: number = 0;

  count(a: any, b: any, c: any) {
    try {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.c = parseFloat(c);
      this.d = 0;
      if (this.a % 27 == 0) {
        this.d++;
      }
      if (this.b % 27 == 0) {
        this.d++;
      }
      if (this.c % 27 == 0) {
        this.d++;
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}
