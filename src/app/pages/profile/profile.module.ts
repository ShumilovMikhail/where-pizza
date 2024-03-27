import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ChangeUserInfoComponent } from './components/profile-settings/components/change-user-info/change-user-info.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent,
    ChangeUserInfoComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    RouterModule,
    NgxMaskModule.forChild(),
    ReactiveFormsModule,
  ]
})
export class ProfileModule { }
