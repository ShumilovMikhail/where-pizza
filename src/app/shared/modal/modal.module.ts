import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { BackdropModule } from '../backdrop/backdrop.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    BackdropModule
  ],

  exports: [ModalComponent]
})
export class ModalModule { };
