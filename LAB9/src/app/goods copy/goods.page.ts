import { Component, OnInit } from '@angular/core';
import { MyForm } from 'src/app/myform/MyForm';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.page.html',
  styleUrls: ['./goods.page.scss'],
})
export class GoodsPage implements OnInit {
  myforms: MyForm[] = [];

  constructor() {}

  onMyFormAdded(newForm: MyForm) {
    console.log('onMyFormAdded');
    this.myforms.push(newForm);
  }
  ngOnInit() {}
}
