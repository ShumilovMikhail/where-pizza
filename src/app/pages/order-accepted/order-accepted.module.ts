import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAcceptedComponent } from './order-accepted.component';
import { OrderAcceptedRouting } from './order-accepted-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OrderAcceptedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrderAcceptedRouting
  ]
})
export class OrderAcceptedModule { }
