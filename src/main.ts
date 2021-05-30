import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

if (environment.production) {
  setTimeout(() => {
    loadApp();
  }, 5000);
}
else {
  setTimeout(() => {
    loadApp();
  }, 500);
}

function loadApp() {
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

//TODO: Change in real app.
