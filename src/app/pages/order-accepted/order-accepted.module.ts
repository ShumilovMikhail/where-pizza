import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAcceptedComponent } from './order-accepted.component';
import { OrderAcceptedRouting } from './order-accepted-routing.module';



@NgModule({
  declarations: [
    OrderAcceptedComponent
  ],
  imports: [
    CommonModule,
    OrderAcceptedRouting
  ]
})
export class OrderAcceptedModule { }
