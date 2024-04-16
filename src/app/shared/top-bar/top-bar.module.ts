import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopBarComponent } from './top-bar.component';
import { ModalModule } from '../modal/modal.module';
import { AuthModule } from '../auth/auth.module';
import { RouterModule } from '@angular/router';
import { AccountPopoverComponent } from './components/account-popover/account-popover.component';
import { ModalCloseDirective } from '../directives/modal-close.directive';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [
    TopBarComponent,
    AccountPopoverComponent,
  ],
  imports: [
    CommonModule,
    ModalModule,
    AuthModule,
    RouterModule,
    DirectivesModule
  ],
  exports: [TopBarComponent]
})
export class TopBarModule { };
