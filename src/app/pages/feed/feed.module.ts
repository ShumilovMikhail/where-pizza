import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './feed.component';
import { FeedRoutingModule } from './feed-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { reducers } from './components/products/store/reducers';
import { GetProductsEffect } from './components/products/store/effects/getProducts.effect';
import { ProductsCategoryComponent } from './components/products/components/products-category/products-category.component';
import { ProductItemComponent } from './components/products/components/products-category/components/products-list/components/product-item/product-item.component';
import { ProductsListComponent } from './components/products/components/products-category/components/products-list/products-list.component';
import { ModalModule } from '../../shared/modal/modal.module';
import { ProductModalModule } from '../../shared/product-modal/product-modal.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { SideModalModule } from '../../shared/side-modal/side-modal.module';
import { GetFiltersEffect } from './components/products/store/effects/getFilters.effect';
import { ProductsFiltersComponent } from './components/products/components/products-category/components/products-filters/products-filters.component';



@NgModule({
  declarations: [
    FeedComponent,
    ProductsComponent,
    ProductsCategoryComponent,
    ProductsListComponent,
    ProductItemComponent,
    ProductsFiltersComponent,
  ],
  imports: [
    CommonModule,
    FeedRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([GetProductsEffect, GetFiltersEffect]),
    ModalModule,
    ProductModalModule,
    PipesModule,
    SideModalModule
  ],
})
export class FeedModule { }
