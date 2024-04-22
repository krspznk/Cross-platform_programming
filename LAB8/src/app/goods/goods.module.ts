import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodsPageRoutingModule } from './goods-routing.module';

import { GoodsPage } from './goods.page';
import { MyformComponent } from '../myform/myform.component'

import { MyHeaderModule } from 'src/my-header/my-header.component.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodsPageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  declarations: [GoodsPage, MyformComponent]
})
export class GoodsPageModule {}
