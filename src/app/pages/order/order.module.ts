import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { OrderComponent } from './order.component';
import { OrderRoutingModule } from './order-routing.module';
import { YourOrderComponent } from './components/your-order/your-order.component';
import { YourOrderProductsListComponent } from './components/your-order/components/your-order-products-list/your-order-products-list.component';
import { ProductsItemModule } from '../../shared/products-item/products-item.module';
import { AddToOrderComponent } from './components/add-to-order/add-to-order.component';
import { ProductsCarouselModule } from '../../shared/products-carousel/products-carousel.module';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { OrderFormUserInfoComponent } from './components/order-form/components/order-form-user-info/order-form-user-info.component';
import { NgxMaskModule } from 'ngx-mask';
import { OrderFormDeliveryComponent } from './components/order-form/components/order-form-delivery/order-form-delivery.component';
import { OrderFormPaymentComponent } from './components/order-form/components/order-form-payment/order-form-payment.component';
import { OrderFormCommentComponent } from './components/order-form/components/order-form-comment/order-form-comment.component';


@NgModule({
  declarations: [
    OrderComponent,
    YourOrderComponent,
    YourOrderProductsListComponent,
    AddToOrderComponent,
    OrderFormComponent,
    OrderFormUserInfoComponent,
    OrderFormDeliveryComponent,
    OrderFormPaymentComponent,
    OrderFormCommentComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    ProductsItemModule,
    ProductsCarouselModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
  ]
})
export class OrderModule { }
