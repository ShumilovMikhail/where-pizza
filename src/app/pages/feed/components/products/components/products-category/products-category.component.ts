import { Component, Input, OnInit } from '@angular/core';
import { ProductsCategoryStoreService } from './services/productsCategoryStore.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrl: './products-category.component.scss',
  providers: [ProductsCategoryStoreService]
})
export class ProductsCategoryComponent implements OnInit {

  @Input('category') category: string;
  readonly categoryName$: Observable<string> = this.productsCategoryStore.name$;

  constructor(private readonly productsCategoryStore: ProductsCategoryStoreService) { };

  ngOnInit(): void {
    this.productsCategoryStore.getCategory(this.category);
  };

};
