import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RootRoutedModule } from './app/routes/root/root.routed.module';
import { environment } from './environments/environment-variables';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(RootRoutedModule)
    .catch((err) => console.error(err));
