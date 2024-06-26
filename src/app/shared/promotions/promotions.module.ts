import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionsComponent } from './promotions.component';
import { HttpClientModule } from '@angular/common/http';
import { PromotionsItemComponent } from './components/promotions-item/promotions-item.component';



@NgModule({
  declarations: [
    PromotionsComponent,
    PromotionsItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PromotionsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PromotionsModule { }
