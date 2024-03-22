import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthTypes } from '../../types/authTypes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { confirmPasswordValidator } from '../../../utils/confirmPassword.validator';
import { registerAction } from '../../store/actions/register.action';
import { AuthRequest } from '../../types/authRequest.interface';
import { Observable, of } from 'rxjs';
import { errorSelector, isAuthenticateSelector, isLoadingSelector } from '../../store/selectors';
import { BackendError } from '../../../types/backedError.interface';
import { RegisterErrorsTypes } from '../../types/registerErrorsTypes';
import { RegisterForm } from './types/registerForm.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  @Output('authTypeChange') authTypeChangeEvent = new EventEmitter<AuthTypes>();
  isLoading$: Observable<boolean>;
  error$: Observable<BackendError<RegisterErrorsTypes>>;
  isAuthenticate$: Observable<boolean>;

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.initializeValues();
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

  private initializeValues(): void {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.error$ = this.store.select(errorSelector);
    this.isAuthenticate$ = this.store.select(isAuthenticateSelector);
  }
};
