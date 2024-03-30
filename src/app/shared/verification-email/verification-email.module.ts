import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerificationEmailComponent } from './verification-email.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { SendVerificationEmailEffect } from './store/effects/send-verification-email.effect';



@NgModule({
  declarations: [VerificationEmailComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature('Verification Email', reducers),
    EffectsModule.forFeature([SendVerificationEmailEffect])
  ],
  exports: [VerificationEmailComponent]
})
export class VerificationEmailModule { }
