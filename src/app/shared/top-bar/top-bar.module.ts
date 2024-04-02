import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';
import { ModalModule } from '../modal/modal.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { AccountPopoverComponent } from './components/account-popover/account-popover.component';
import { ModalCloseDirective } from '../directives/modalClose.directive';

@NgModule({
  declarations: [
    TopBarComponent,
    AccountPopoverComponent,
    ModalCloseDirective
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
