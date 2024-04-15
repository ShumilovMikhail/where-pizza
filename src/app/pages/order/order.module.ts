import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { YourOrderComponent } from './components/your-order/your-order.component';
import { YourOrderProductsListComponent } from './components/your-order/components/your-order-products-list/your-order-products-list.component';
import { ProductsItemModule } from '../../shared/products-item/products-item.module';
import { AddToOrderComponent } from './components/add-to-order/add-to-order.component';



@NgModule({
  declarations: [
    OrderComponent,
    YourOrderComponent,
    YourOrderProductsListComponent,
    AddToOrderComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ProductsItemModule
  ]
})
export class OrderModule { }
