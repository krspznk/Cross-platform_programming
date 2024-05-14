import { Component, OnInit } from '@angular/core';
import { Textbook } from './classes/Textbook';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {

  title: string = '';
  author: string = '';
  subject: string = '';
  pages: number = 0;
  pageCount: number = 0;
  magazine_name: string = '';
  textbook: Textbook = new Textbook("", "", "", 0);

  constructor() { }

  ngOnInit() {
  }

  createTextbook(){
    this.textbook = new Textbook(
      this.title,
      this.author,
      this.subject,
      this.pages
    );
    
    this.pageCount = this.textbook.getPageCount();
    this.textbook.printDetails();
    this.textbook.determineType();
  }
}
