import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { PromotionsStoreService } from './services/promotions-store.service';
import { Observable } from 'rxjs';
import { PromotionsType } from './types/promotions.type';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss',
})
export class PromotionsComponent implements OnInit {

  promotions$: Observable<PromotionsType>;

  constructor(private readonly promotionsStore: PromotionsStoreService) { };


  ngOnInit(): void {
    this.promotionsStore.getPromotions();
    this.promotions$ = this.promotionsStore.promotions$;
  };
};
