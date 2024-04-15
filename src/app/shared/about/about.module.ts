import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { DirectivesModule } from '../directives/directives.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
