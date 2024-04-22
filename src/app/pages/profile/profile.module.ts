import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { NgxMaskModule } from 'ngx-mask';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ChangeUserInfoComponent } from './components/profile-settings/components/change-user-info/change-user-info.component';
import { reducers } from './components/profile-settings/store/reducers';
import { ChangeUserPasswordComponent } from './components/profile-settings/components/change-user-password/change-user-password.component';
import { ProfileVerificationEmailComponent } from './components/profile-settings/components/profile-verification-email/profile-verification-email.component';
import { ModalModule } from '../../shared/modal/modal.module';
import { VerificationEmailModule } from '../../shared/verification-email/verification-email.module';
import { ProfileHistoryComponent } from './components/profile-history/profile-history.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent,
    ChangeUserInfoComponent,
    ChangeUserPasswordComponent,
    ProfileVerificationEmailComponent,
    ProfileHistoryComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
    StoreModule.forFeature('settings', reducers),
    ModalModule,
    VerificationEmailModule,
    NgxMaskModule.forChild(),
  ]
})
export class ProfileModule { }
