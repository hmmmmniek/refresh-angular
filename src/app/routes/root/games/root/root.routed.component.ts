import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { GamesListComponent } from "src/app/features/games-list/games-list.feature.component";

@Component({
    selector: 'app_games-root_routed',
    standalone: true,
    template: `
        <app_games-list></app_games-list>
    `,
    styleUrls: [],
    imports: [
        CommonModule,
        GamesListComponent
    ]
})
export class GamesRootRoutedComponent {
    constructor() {}
}
