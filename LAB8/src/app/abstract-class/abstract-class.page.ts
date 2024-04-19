import { Component, OnInit } from '@angular/core';
import { Printed, Magazine, Newspaper } from './class/classes';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})
export class AbstractClassPage implements OnInit {
  printed: Printed[] = [];
  inputField = 0;
  meanMagazine = 0;
  meanNewspaper =0;

  constructor() { }

  ras(){
    this.printed = new Array();

    let n = this.inputField;

    for (let i = 0; i < n; i++) {
      let magazineEdition = Math.floor(Math.random() * 10) + 1; 
      let magazinePrice = Math.random() * 10 + 5; 
  
      let newspaperPages = Math.floor(Math.random() * 50) + 10; 
      let newspaperPagePrice = Math.random() * 0.5 + 0.5; 
      let newspaperEdition = Math.floor(Math.random() * 10) + 1; 
  
      this.printed.push(new Magazine('Magazine ' + i, magazineEdition, magazinePrice));
      this.printed.push(new Newspaper("Newspaper " + i, newspaperPages, newspaperPagePrice, newspaperEdition));
    }

    this.meanMagazine = 0;
    this.meanNewspaper = 0;
    this.printed.forEach((element)=>{
      if (element.name.includes('Magazine')){
        this.meanMagazine += element.getCost();
      }
      else{
        this.meanNewspaper += element.getCost();
      }
    });

    this.meanMagazine = this.meanMagazine / n;
    this.meanNewspaper = this.meanNewspaper / n;
  }



  ngOnInit() {
  }

}
