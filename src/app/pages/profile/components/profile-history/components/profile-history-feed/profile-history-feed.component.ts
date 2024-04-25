import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProfileHistoryOrder } from '../../types/profileHistoryOrder.interface';
import { ProfileHistoryFeedService } from './services/profile-history-feed.service';

@Component({
  selector: 'app-profile-history-feed',
  templateUrl: './profile-history-feed.component.html',
  styleUrl: './profile-history-feed.component.scss'
})
export class ProfileHistoryFeedComponent implements OnInit, OnDestroy {

  @Input('orders') orders: ProfileHistoryOrder[];
  ordersOnPage: ProfileHistoryOrder[] = []

  private routeSubscription: Subscription

  constructor(private readonly profileHistoryFeedService: ProfileHistoryFeedService, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.profileHistoryFeedService.setOrders(this.orders);
    this.initializeListeners();
  };

  onRepeatOrder(order: ProfileHistoryOrder) {
    this.profileHistoryFeedService.repeatOrder(order);
  };

  private initializeListeners(): void {
    this.routeSubscription = this.route.params.subscribe((params: Params) => {
      this.ordersOnPage = this.profileHistoryFeedService.getOrdersOnPage(+params['page']);
    });
  };

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  };
};
