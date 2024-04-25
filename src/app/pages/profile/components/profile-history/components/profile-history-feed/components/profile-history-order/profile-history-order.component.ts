import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfileHistoryOrder } from '../../../../types/profileHistoryOrder.interface';

@Component({
  selector: 'app-profile-history-order',
  templateUrl: './profile-history-order.component.html',
  styleUrl: './profile-history-order.component.scss'
})
export class ProfileHistoryOrderComponent {
  @Input('order') order: ProfileHistoryOrder;
  @Output('repeatOrder') repeatOrderEvent = new EventEmitter<ProfileHistoryOrder>()


  onRepeat() {
    this.repeatOrderEvent.emit(this.order);
  };
};
