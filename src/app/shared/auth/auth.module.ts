import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { reducers } from './store/reducers';
import { RegisterEffect } from './store/effects/register.effect';
import { RegisterFormComponent } from './components/register/components/register-form/register-form.component';
import { SetUserInfoComponent } from './components/set-user-info/set-user-info.component';
import { SetUserInfoEffect } from './store/effects/set-user-info.effect';
import { NgxMaskModule } from 'ngx-mask';

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
    EffectsModule.forFeature([RegisterEffect, SetUserInfoEffect]),
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatNativeDateModule,
  ],

  exports: [AuthComponent]
})
export class AuthModule { };
