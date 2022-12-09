import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GamesListComponent } from 'src/app/features/games-list/games-list.feature.component';
import { GamesRoutedComponent } from './games.routed.component';
import { GamesRoutingModule } from './games.routing.module';

@NgModule({
    declarations: [
        GamesRoutedComponent
    ],
    imports: [
        CommonModule,
        GamesRoutingModule,
    ],
})
export class GamesRoutedModule {}
