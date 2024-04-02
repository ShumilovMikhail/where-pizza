import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { logoutAction } from '../../../auth/store/actions/sync.action';

@Component({
  selector: 'app-account-popover',
  templateUrl: './account-popover.component.html',
  styleUrl: './account-popover.component.scss'
})
export class AccountPopoverComponent {

  constructor(private store: Store) { };

  onLogout() {
    this.store.dispatch(logoutAction());
  };

};
