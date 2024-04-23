import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { profileHistoryOrdersSelector } from './store/selectors';
import { ProfileHistoryOrder } from './types/profileHistoryOrder.interface';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrl: './profile-history.component.scss'
})
export class ProfileHistoryComponent implements OnInit, OnDestroy {

  limit: number = environment.ProfileHistoryLimit;
  ordersQuantity: number = 0;

  private profileHistoryOrdersSubscription: Subscription;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.profileHistoryOrdersSubscription = this.store.select(profileHistoryOrdersSelector).subscribe((orders: ProfileHistoryOrder[]) => {
      this.ordersQuantity = orders.length;
    });
  };

  ngOnDestroy(): void {
    this.profileHistoryOrdersSubscription.unsubscribe();
  };

};
