import { Component, OnInit } from '@angular/core';

import { AuthTypes } from '../auth/types/authTypes';
import { Subscription, filter, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { isAuthenticateSelector } from '../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
  authType: AuthTypes = AuthTypes.LOGIN;
  modalOpen: boolean = true;
  isAuthenticateSubscribe: Subscription;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.isAuthenticateSubscribe = this.store.select(isAuthenticateSelector).pipe(
      filter(Boolean),
      take(1)
    ).subscribe((isAuthenticate) => {
      this.modalOpen = false
    });
  };

  onModalOpen() {
    this.modalOpen = true;
  };

  onModalClose(): void {
    this.modalOpen = false;
  };
};
