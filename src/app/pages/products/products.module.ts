import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProfileRoutingModule } from '../profile/profile-routing.module';



@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
})
export class ProductsModule { }
