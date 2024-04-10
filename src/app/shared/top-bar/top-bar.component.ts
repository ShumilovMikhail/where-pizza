import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, filter, take } from 'rxjs';

import { AuthTypes } from '../auth/types/authTypes';
import { isAuthenticateSelector } from '../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit, OnDestroy {
  authType: AuthTypes = AuthTypes.REGISTER;
  modalOpen: boolean = false;
  popoverOpen: boolean = false;
  isAuthenticateSubscribe: Subscription;
  isAuthenticate: boolean = false;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.isAuthenticateSubscribe = this.store.select(isAuthenticateSelector).pipe(
    ).subscribe((isAuthenticate) => {
      this.isAuthenticate = isAuthenticate;
      this.modalOpen = this.modalOpen ? !isAuthenticate : false;
    });
  };

  onModalOpen() {
    this.modalOpen = true;
  };

  onModalClose(): void {
    this.modalOpen = false;
  };

  onPopoverToggle(): void {
    this.popoverOpen = !this.popoverOpen;
  };

  onPopoverClose(): void {
    this.popoverOpen = false;
  };

  ngOnDestroy(): void {
    this.isAuthenticateSubscribe.unsubscribe()
  }
};
