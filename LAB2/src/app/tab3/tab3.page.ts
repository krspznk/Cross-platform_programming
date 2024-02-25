import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }
  n: number = 0;
  matrix: number[][] = [];
  creatematrix(n: any) {
    this.matrix = [];
    try {
      this.n = parseInt(n);
      if (isNaN(this.n) == true) {
        throw new Error('Parameter is not a number!');
      }
      if (n <= 0) {
        throw new Error('Parameter less then zero!'); 
      }
      let i: number = 0, j: number = 0;
      this.matrix = Array(this.n);
      console.log("array created");
      for (i = 0; i<this.n; i++){
        this.matrix[i] = Array(this.n);
        for (j = 0; j<this.n; j++){
          this.matrix[i][j] = Math.floor(Math.random() * 200 - 100);
        }
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  getColor (num: number){
    if (num%2!=0 && num<=-10){
      return 'red';
    }
    else{
      return 'green';
    }
  }
  ngOnInit(){
  }
}
