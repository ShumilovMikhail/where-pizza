import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { userDataSelector } from '../../../../../../shared/auth/store/selectors';
import { isLoadingSelector } from '../../store/selectors';
import { confirmPasswordValidator } from '../../../../../../shared/utils/confirmPassword.validator';
import { changeUserPasswordAction } from '../../../../../../shared/auth/store/actions/change-user-password.action';

@Component({
  selector: 'app-change-user-password',
  templateUrl: './change-user-password.component.html',
  styleUrl: './change-user-password.component.scss'
})
export class ChangeUserPasswordComponent implements OnInit, OnDestroy {
  formOpen: boolean = false;
  form: FormGroup;
  userInfoSubscription: Subscription;
  isLoading$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) { };

  ngOnInit(): void {
    this.userInfoSubscription = this.store.select(userDataSelector).subscribe(() => {
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
    this.store.dispatch(changeUserPasswordAction({ password: this.form.get('password').get('pass').value }));
  };

  private initializeForm(): void {
    this.form = this.fb.group({
      password: new FormGroup({
        pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirm_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      },
        confirmPasswordValidator()
      )
    });
  };

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
  };

  ngOnDestroy(): void {
    this.userInfoSubscription.unsubscribe();
  };
};
