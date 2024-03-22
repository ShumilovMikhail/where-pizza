import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { reducers } from './store/reducers';
import { RegisterEffect } from './store/effects/register.effect';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register/components/register-form/register-form/register-form.component';
import { ProfileFillingComponent } from './components/profile-filling/profile-filling.component';

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    LoginComponent,
    RegisterFormComponent,
    ProfileFillingComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect]),
    ReactiveFormsModule
  ],

  exports: [AuthComponent]
})
export class AuthModule { }
