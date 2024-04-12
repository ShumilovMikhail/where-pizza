import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';
import { BackdropModule } from '../backdrop/backdrop.module';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    BackdropModule,
    DirectivesModule
  ],

  exports: [ModalComponent]
})
export class ModalModule { };
