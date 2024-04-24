import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { profileHistoryOrdersSelector } from './store/selectors';
import { ProfileHistoryOrder } from './types/profileHistoryOrder.interface';
import { environment } from '../../../../../environments/environment.development';
import { ActivatedRoute, Params } from '@angular/router';
import { getProfileHistoryOrdersAction } from './store/actions/getOrders.action';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrl: './profile-history.component.scss'
})
export class ProfileHistoryComponent implements OnInit, OnDestroy {

  orders: ProfileHistoryOrder[];
  limit: number = environment.ProfileHistoryLimit;
  currentPage: number;

  private profileHistoryOrdersSubscription: Subscription;
  private routeSubscription: Subscription;

  constructor(private readonly store: Store, private route: ActivatedRoute) { };

  ngOnInit(): void {
    this.store.dispatch(getProfileHistoryOrdersAction());
    this.profileHistoryOrdersSubscription = this.store.select(profileHistoryOrdersSelector).subscribe((orders: ProfileHistoryOrder[]) => {
      this.orders = orders;
    });
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.currentPage = +params['page'];
    });
  };

  ngOnDestroy(): void {
    this.profileHistoryOrdersSubscription.unsubscribe();
    this.routeSubscription.unsubscribe()
  };

};
