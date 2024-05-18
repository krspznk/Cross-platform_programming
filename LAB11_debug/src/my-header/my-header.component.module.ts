import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {IonicModule} from "@ionic/angular";
import { MyHeaderComponent } from "./my-header.component";

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    MyHeaderComponent
  ],
  exports: [
    MyHeaderComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class MyHeaderModule {}