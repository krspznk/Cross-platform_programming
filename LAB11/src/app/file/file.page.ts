import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-file',
  templateUrl: './file.page.html',
  styleUrls: ['./file.page.scss'],
})
export class FilePage implements OnInit {
  data: GroupData = {};
  dataUrl = 'https://api.jsonbin.io/v3/qs/65e50ea0dc74654018ad5af5';
  loading: any;
  group: string = "";

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {}

  async load() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...',
    });

    await this.loading.present();

    fetch(this.dataUrl)
      .then((response) => response.json())
      .then((data) => {
        this.data = data.record;
        console.log(this.data);
      });

    this.loading.dismiss();
  }

  getGroup(group: any): boolean {
    return group.toUpperCase() === this.group.toUpperCase();
  }
  

  ngOnInit() {
    this.load();
  }
}

interface Teacher {
  date: string;
  day_of_week: string;
  subject: string;
  group: string;
  classroom: string;
}

interface GroupData {
  [key: string]: Teacher[];
}
