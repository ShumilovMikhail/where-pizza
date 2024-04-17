import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';

import { logoutAction } from '../../../auth/store/actions/sync.action';

@Component({
  selector: 'app-account-popover',
  templateUrl: './account-popover.component.html',
  styleUrl: './account-popover.component.scss'
})
export class AccountPopoverComponent {

  @Output('popoverClose') popoverClose = new EventEmitter<void>()

  constructor(private store: Store) { };

  onLogout(): void {
    this.store.dispatch(logoutAction());
    this.onClose()
  };

  onClose(): void {
    this.popoverClose.emit();
  };
};
