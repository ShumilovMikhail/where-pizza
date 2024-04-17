import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription, take } from 'rxjs';

import { dateValidator } from '../../../../../../shared/utils/date.validator';
import { UserInfo } from '../../../../../../shared/types/userInfo.interface';
import { userInfoSelector } from '../../../../../../shared/auth/store/selectors';
import { OrderFormUserInfo } from '../../types/orderFormUserInfo.interface';

@Component({
  selector: 'app-order-form-user-info',
  templateUrl: './order-form-user-info.component.html',
  styleUrl: './order-form-user-info.component.scss'
})
export class OrderFormUserInfoComponent implements OnInit, OnDestroy {

  @Output('formChanged') formChangedEvent: EventEmitter<OrderFormUserInfo> = new EventEmitter<OrderFormUserInfo>()

  form: FormGroup;
  userInfo: UserInfo | null;
  userInfoSubscription: Subscription;

  constructor(private readonly fb: FormBuilder, private readonly store: Store) { };

  ngOnInit(): void {
    this.userInfoSubscription = this.store.select(userInfoSelector).pipe(take(1)).subscribe((userInfo) => {
      this.userInfo = userInfo;
    });
    this.initializeForm();
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.formChangedEvent.emit(this.form.value);
      };
    });
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      username: new FormControl(this.userInfo ? this.userInfo.username : '', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl(this.userInfo ? this.userInfo.phone : '', [Validators.required, Validators.minLength(11)]),
      date: new FormControl(this.userInfo ? this.userInfo.date : '', [dateValidator()])
    });
  };

  ngOnDestroy(): void {
    this.userInfoSubscription.unsubscribe();
  };

};
