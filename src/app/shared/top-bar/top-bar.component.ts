import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, filter, take } from 'rxjs';

import { AuthTypes } from '../auth/types/authTypes';
import { isAuthenticateSelector } from '../auth/store/selectors';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent implements OnInit {
  authType: AuthTypes = AuthTypes.REGISTER;
  modalOpen: boolean = false;
  isAuthenticateSubscribe: Subscription;
  isAuthenticate: boolean = false;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.isAuthenticateSubscribe = this.store.select(isAuthenticateSelector).pipe(
      filter(Boolean),
      take(1)
    ).subscribe((isAuthenticate) => {
      this.isAuthenticate = true;
      this.modalOpen = false;
    });
  };

  onModalOpen() {
    this.modalOpen = true;
  };

  onModalClose(): void {
    this.modalOpen = false;
  };
};
