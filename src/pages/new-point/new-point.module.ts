import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewPointPage } from './new-point';

@NgModule({
  declarations: [
    NewPointPage,
  ],
  imports: [
    IonicPageModule.forChild(NewPointPage),
  ],
})
export class NewPointPageModule {}
