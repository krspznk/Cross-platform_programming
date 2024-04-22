import { Component, OnInit } from '@angular/core';
import { MyForm } from 'src/app/myform/MyForm';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.page.html',
  styleUrls: ['./goods.page.scss'],
})
export class GoodsPage implements OnInit {
  isEditing: boolean = false;
  myform!: [];
  myforms: MyForm[] = [];

  constructor() {}

  onMyFormAdded(newForm: MyForm) {
    this.myforms.push(newForm);
  }

  onMyFormUpdated(updatedMyForm: MyForm) {
  }

  onBackToForm() {
    this.isEditing = false;
  }
  ngOnInit() {
  }

}
