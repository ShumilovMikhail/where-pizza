import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { NgxMaskModule } from 'ngx-mask';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ChangeUserInfoComponent } from './components/profile-settings/components/change-user-info/change-user-info.component';
import { reducers as reducersSettings } from './components/profile-settings/store/reducers';
import { ChangeUserPasswordComponent } from './components/profile-settings/components/change-user-password/change-user-password.component';
import { ProfileVerificationEmailComponent } from './components/profile-settings/components/profile-verification-email/profile-verification-email.component';
import { ModalModule } from '../../shared/modal/modal.module';
import { VerificationEmailModule } from '../../shared/verification-email/verification-email.module';
import { ProfileHistoryComponent } from './components/profile-history/profile-history.component';
import { reducers as reducersProfileHistory } from './components/profile-history/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { AddOrderToHistoryEffect } from './components/profile-history/store/effects/addOrderToHistory.effect';
import { GetProfileHistoryOrdersEffect } from './components/profile-history/store/effects/getProfileHistoryOrders.effect';
import { PaginationModule } from '../../shared/pagination/pagination.module';


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
    StoreModule.forFeature('settings', reducersSettings),
    StoreModule.forFeature('profile history', reducersProfileHistory),
    ModalModule,
    VerificationEmailModule,
    NgxMaskModule.forChild(),
    HttpClientModule,
    EffectsModule.forFeature([AddOrderToHistoryEffect, GetProfileHistoryOrdersEffect]),
    PaginationModule
  ]
})
export class ProfileModule { }
