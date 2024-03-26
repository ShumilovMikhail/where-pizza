import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';
import { ModalModule } from '../modal/modal.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    AuthModule,
    RouterModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { };
