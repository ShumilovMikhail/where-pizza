import { Component, EventEmitter, Output } from '@angular/core';
import { AuthTypes } from '../../types/authTypes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  @Output('authTypeChange') authTypeChangeEvent = new EventEmitter<AuthTypes>();

  onRedirect(): void {
    this.authTypeChangeEvent.emit(AuthTypes.REGISTER);
  };
};
