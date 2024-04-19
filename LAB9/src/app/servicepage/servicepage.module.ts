import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicepagePageRoutingModule } from './servicepage-routing.module';

import { ServicepagePage } from './servicepage.page';
import { MyHeaderModule } from 'src/my-header/my-header.component.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ServicepagePageRoutingModule,
    MyHeaderModule
  ],
  declarations: [ServicepagePage]
})
export class ServicepagePageModule {}
