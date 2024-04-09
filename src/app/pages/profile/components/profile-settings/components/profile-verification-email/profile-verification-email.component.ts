import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { isVerifiedEmail } from '../../../../../../shared/auth/store/selectors';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-profile-verification-email',
  templateUrl: './profile-verification-email.component.html',
  styleUrl: './profile-verification-email.component.scss'
})
export class ProfileVerificationEmailComponent implements OnInit, OnDestroy {
  modalOpen: boolean = false;
  verifiedEmailSubscribe: Subscription;
  emailVerified: boolean;
  constructor(private store: Store) { };

  ngOnInit(): void {
    this.initializeListeners()
  }

  onClick(): void {
    this.modalOpen = true;
  };

  onCloseModal(): void {
    this.modalOpen = false;
  };

  private initializeListeners(): void {
    this.verifiedEmailSubscribe = this.store.select(isVerifiedEmail).subscribe((emailVerified) => {
      if (emailVerified) {
        this.modalOpen = false;
        this.emailVerified = emailVerified
      }
    });
  };

  ngOnDestroy(): void {
    this.verifiedEmailSubscribe.unsubscribe();
  };
};
