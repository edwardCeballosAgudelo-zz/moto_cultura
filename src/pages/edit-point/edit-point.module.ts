import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPointPage } from './edit-point';

@NgModule({
  declarations: [
    EditPointPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPointPage),
  ],
})
export class EditPointPageModule {}
