import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProfileComponent } from "./profile.component";
import { ProfileSettingsComponent } from "./components/profile-settings/profile-settings.component";
import { userInfoResolver } from "./components/profile-settings/components/change-user-info/services/user-info-resolver.service";
import { ProfileHistoryComponent } from "./components/profile-history/profile-history.component";

const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: 'settings', component: ProfileSettingsComponent, resolve: { userInfo: userInfoResolver } },
      { path: 'history', redirectTo: 'history/1' },
      { path: 'history/:page', component: ProfileHistoryComponent }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ProfileRoutingModule { };
