import { Component, Input } from '@angular/core';

import { AuthTypes } from './types/authTypes';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  @Input('authType') authType: AuthTypes;

  onAuthTypeChange(authType: AuthTypes): void {
    this.authType = authType
  };
};
