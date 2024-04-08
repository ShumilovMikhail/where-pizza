import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideModalComponent } from './side-modal.component';
import { BackdropModule } from '../backdrop/backdrop.module';



@NgModule({
  declarations: [SideModalComponent],
  imports: [
    CommonModule,
    BackdropModule
  ],
  exports: [SideModalComponent]
})
export class SideModalModule { }
