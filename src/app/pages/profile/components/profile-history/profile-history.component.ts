import { Component, OnDestroy, OnInit } from '@angular/core';
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

  orders: ProfileHistoryOrder[];

  private profileHistoryOrdersSubscription: Subscription;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.profileHistoryOrdersSubscription = this.store.select(profileHistoryOrdersSelector).subscribe((orders: ProfileHistoryOrder[]) => {
      this.orders = orders;
    });
  };

  ngOnDestroy(): void {
    this.profileHistoryOrdersSubscription.unsubscribe();
  };

};
