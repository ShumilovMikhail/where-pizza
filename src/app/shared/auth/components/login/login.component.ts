import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthTypes } from '../../types/authTypes';
import { loginAction } from '../../store/actions/login.action';
import { AuthRequest } from '../../types/authRequest.interface';
import { BackendError } from '../../../types/backedError.interface';
import { LoginErrorsTypes } from '../../types/loginErrorsTypes';
import { errorSelector, isSubmittingSelector } from '../../store/selectors';
import { UserInfoErrorsTypes } from '../../types/userInfoErrorsTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  @Output('authTypeChange') authTypeChangeEvent = new EventEmitter<AuthTypes>();

  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  error$: Observable<BackendError<LoginErrorsTypes>>;
  errorSubscription: Subscription

  constructor(private fb: FormBuilder, private store: Store) { };

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
    this.initializeListeners();
  };

  onRedirect(): void {
    this.authTypeChangeEvent.emit(AuthTypes.REGISTER);
  };

  onSubmit() {
    const user: AuthRequest = {
      ...this.form.value,
      returnSecureToken: true
    };
    this.store.dispatch(loginAction({ user }));
    this.form.markAsUntouched();
  };

  private initializeForm() {
    this.form = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  };

  private initializeValues() {
    this.isSubmitting$ = this.store.select(isSubmittingSelector);
    this.error$ = this.store.select(errorSelector) as Observable<BackendError<LoginErrorsTypes>>;
  };

  private initializeListeners() {
    this.errorSubscription = this.store.select(errorSelector).subscribe((error) => {
      if (error?.message === UserInfoErrorsTypes.USER_INFO_IS_UNDEFINED) {
        this.authTypeChangeEvent.emit(AuthTypes.SET_USER_INFO);
      };
    });
  };
};
