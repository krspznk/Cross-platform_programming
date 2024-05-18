import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() { }
  num1: number = 0;
  num2: number = 0;
  answer: number = 0;
  findnum(num1: any, num2: any) {
    try {
      this.num1 = parseFloat(num1);
      this.num1 = parseFloat(num2);
      this.answer = 0;
      let start = Math.min(this.num1, this.num2);
      let end = Math.max(this.num1, this.num2);
      for (let i = start; i <= end; i++) {
        if (i % 2 === 0 && i % 3 === 2) {
          this.answer++;
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }
}

