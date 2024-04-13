import { Component, Input } from '@angular/core';
import { Promotion } from '../../types/promotion.interface';

@Component({
  selector: 'app-promotions-item',
  templateUrl: './promotions-item.component.html',
  styleUrl: './promotions-item.component.scss'
})
export class PromotionsItemComponent {
  @Input('promotion') promotion: Promotion;
};
