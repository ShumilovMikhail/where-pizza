import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { register as registerSwiper } from 'swiper/element/bundle';
import { provideAnimations } from '@angular/platform-browser/animations'


registerSwiper();
platformBrowserDynamic().bootstrapModule(AppModule,
  {
    providers: [provideAnimations()]
  }
)
  .catch(err => console.error(err));
