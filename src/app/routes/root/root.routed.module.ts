import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from 'src/app/services/core.module';
import { RootRoutedComponent } from './root.routed.component';
import { RootRoutingModule } from './root.routing.module';

@NgModule({
    declarations: [RootRoutedComponent],
    imports: [
        RootRoutingModule,
        BrowserModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [RootRoutedComponent],
})
export class RootRoutedModule {}
