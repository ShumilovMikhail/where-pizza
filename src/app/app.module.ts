import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './shared/header/header.module';
import { TopBarModule } from './shared/top-bar/top-bar.module';
import { NgxMaskModule } from 'ngx-mask';
import { FooterModule } from './shared/footer/footer.module';
import { ProfileModule } from './pages/profile/profile.module';
import { FeedModule } from './pages/feed/feed.module';
import { OrderModule } from './pages/order/order.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    HeaderModule,
    FooterModule,
    ProfileModule,
    FeedModule,
    OrderModule,
    TopBarModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    NgxMaskModule.forRoot(),
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { };
