import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { AuthTypes } from '../../types/authTypes';
import { registerAction } from '../../store/actions/register.action';
import { AuthRequest } from '../../types/authRequest.interface';
import { errorSelector, isAuthenticateSelector, isLoadingSelector } from '../../store/selectors';
import { BackendError } from '../../../types/backedError.interface';
import { RegisterErrorsTypes } from '../../types/registerErrorsTypes';
import { RegisterForm } from './types/registerForm.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, OnDestroy {
  @Output('authTypeChange') authTypeChangeEvent = new EventEmitter<AuthTypes>();

  isLoading$: Observable<boolean>;
  error$: Observable<BackendError<RegisterErrorsTypes>>;
  isAuthenticateSubscribe: Subscription

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListeners();
  };

  onRedirect(): void {
    this.authTypeChangeEvent.emit(AuthTypes.LOGIN);
  };

  onSubmit(form: RegisterForm): void {
    const user: AuthRequest = {
      email: form.email,
      password: form.password.pass,
      returnSecureToken: true
    };
    this.store.dispatch(registerAction({ user }));
  };

  private initializeListeners(): void {
    this.isAuthenticateSubscribe = this.store.select(isAuthenticateSelector).subscribe((isAuthenticate) => {
      if (isAuthenticate) {
        this.authTypeChangeEvent.emit(AuthTypes.SET_USER_INFO);
      };
    });
  };

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
  };

  ngOnDestroy(): void {
    this.isAuthenticateSubscribe.unsubscribe();
  };
};
