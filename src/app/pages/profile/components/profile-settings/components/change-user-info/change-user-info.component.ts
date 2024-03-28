import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { dateValidator } from '../../../../../../shared/utils/date.validator';
import { UserInfo } from '../../../../../../shared/types/userInfo.interface';
import { changeUserInfoAction } from '../../../../../../shared/auth/store/actions/change-user-info.action';
import { userInfoSelector } from '../../../../../../shared/auth/store/selectors';
import { isLoadingSelector } from '../../store/selectors';

@Component({
  selector: 'app-change-user-info',
  templateUrl: './change-user-info.component.html',
  styleUrl: './change-user-info.component.scss'
})
export class ChangeUserInfoComponent implements OnInit, OnDestroy {
  formOpen: boolean = false;
  userInfo: UserInfo;
  form: FormGroup;
  userInfoSubscription: Subscription;
  isLoading$: Observable<boolean>;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private store: Store) { };

  ngOnInit(): void {
    this.route.data.subscribe(({ userInfo }) => {
      this.userInfo = userInfo
    });
    this.userInfoSubscription = this.store.select(userInfoSelector).subscribe((userInfo) => {
      this.userInfo = userInfo;
      if (this.formOpen) {
        this.formOpen = false;
      };
    });
    this.initializeForm();
    this.initializeValues();
  };

  onChange(): void {
    this.formOpen = true;
  };

  onCancel(): void {
    this.formOpen = false;
  };

  onSubmit(): void {
    this.store.dispatch(changeUserInfoAction({ userInfo: this.form.value }));
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      username: new FormControl(this.userInfo.username, [Validators.required, Validators.minLength(2)]),
      phone: new FormControl(this.userInfo.phone, [Validators.required, Validators.minLength(11)]),
      date: new FormControl(this.userInfo.date, [Validators.required, Validators.minLength(8), dateValidator()]),
    })
  };

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
  };

  ngOnDestroy(): void {
    this.userInfoSubscription.unsubscribe();
  };
};
