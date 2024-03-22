import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';
import { ModalModule } from '../modal/modal.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    AuthModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { };
