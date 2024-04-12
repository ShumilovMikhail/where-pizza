import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-counter',
  templateUrl: './product-counter.component.html',
  styleUrl: './product-counter.component.scss'
})
export class ProductCounterComponent {
  @Output('countChange') countChange = new EventEmitter<number>();
  @Input('minCount') minCount: number;
  @Input('maxCount') maxCount: number;
  @Input('count') count: number = 0;

  onInc(): void {
    if (this.count >= this.maxCount) {
      return
    }
    this.count++;
    this.countChange.emit(this.count)
  };
  onDec(): void {
    if (this.count <= this.minCount) {
      return
    }
    this.count--;
    this.countChange.emit(this.count)
  };
};
