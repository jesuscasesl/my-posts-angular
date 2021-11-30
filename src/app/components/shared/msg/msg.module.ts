import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsgComponent } from './msg.component';



@NgModule({
  declarations: [
    MsgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MsgComponent]
})
export class MsgModule { }
