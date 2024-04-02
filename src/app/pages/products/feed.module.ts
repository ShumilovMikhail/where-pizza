import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { ProfileRoutingModule } from '../profile/profile-routing.module';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
})
export class FeedModule { }
