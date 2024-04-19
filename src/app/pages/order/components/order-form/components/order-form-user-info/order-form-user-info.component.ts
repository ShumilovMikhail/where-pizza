import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';

import { UserInfo } from '../../../../../../shared/types/userInfo.interface';
import { userInfoSelector } from '../../../../../../shared/auth/store/selectors';

@Component({
  selector: 'app-order-form-user-info',
  templateUrl: './order-form-user-info.component.html',
  styleUrl: './order-form-user-info.component.scss'
})
export class OrderFormUserInfoComponent implements OnInit, OnDestroy {

  @Input('formGroup') form: FormGroup;
  userInfo: UserInfo | null;
  userInfoSubscription: Subscription;

  constructor(private readonly store: Store) { };

  ngOnInit(): void {
    this.userInfoSubscription = this.store.select(userInfoSelector).pipe(take(1)).subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
    this.form.setValue({
      username: this.userInfo ? this.userInfo.username : '',
      phone: this.userInfo ? this.userInfo.phone : '',
      date: this.userInfo ? this.userInfo.date : '',
    });
  };

  ngOnDestroy(): void {
    this.userInfoSubscription.unsubscribe();
  };

};
