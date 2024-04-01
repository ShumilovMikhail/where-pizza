import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { reducers } from './store/reducers';
import { RegisterEffect } from './store/effects/register.effect';
import { RegisterFormComponent } from './components/register/components/register-form/register-form.component';
import { SetUserInfoEffect } from './store/effects/set-user-info.effect';
import { NgxMaskModule } from 'ngx-mask';
import { SetUserInfoComponent } from './components/set-user-info/set-user-info.component';
import { GetUserInfoEffect } from './store/effects/get-user-info.effect';
import { LoginEffect } from './store/effects/login.effect';
import { ChangeUserInfoEffect } from './store/effects/change-user-info.effect';
import { ChangeUserPasswordEffect } from './store/effects/change-user-password.effect';
import { GetUserDetailsEffect } from './store/effects/get-user-details.effect';
import { AutoLoginEffect } from './store/effects/auto-login.effect';
import { LogoutEffect } from './store/effects/logout.effect';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    RegisterFormComponent,
    SetUserInfoComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, SetUserInfoEffect, GetUserInfoEffect, LoginEffect, AutoLoginEffect, ChangeUserInfoEffect, ChangeUserPasswordEffect, GetUserDetailsEffect, LogoutEffect]),
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],

  exports: [AuthComponent]
})
export class AuthModule { };
