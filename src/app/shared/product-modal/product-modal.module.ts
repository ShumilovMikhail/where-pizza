import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductModalComponent } from './product-modal.component';
import { PipesModule } from '../pipes/pipes.module';
import { InfoHoverDirective } from './directives/info-hover.directive';



@NgModule({
  declarations: [
    ProductModalComponent,
    InfoHoverDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipesModule
  ],
  exports: [ProductModalComponent]
})
export class ProductModalModule { }
