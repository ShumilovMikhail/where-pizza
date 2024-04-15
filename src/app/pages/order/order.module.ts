import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { YourOrderComponent } from './components/your-order/your-order.component';



@NgModule({
  declarations: [
    OrderComponent,
    YourOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
