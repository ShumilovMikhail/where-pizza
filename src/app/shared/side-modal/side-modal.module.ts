import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideModalComponent } from './side-modal.component';
import { BackdropModule } from '../backdrop/backdrop.module';
import { RemoveScrollingDirective } from '../directives/remove-scrolling.directive';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [SideModalComponent],
  imports: [
    CommonModule,
    BackdropModule,
    DirectivesModule
  ],
  exports: [SideModalComponent]
})
export class SideModalModule { }
